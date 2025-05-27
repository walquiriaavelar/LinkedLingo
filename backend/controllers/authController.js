const axios = require('axios');

exports.handleLinkedInAuth = (req, res) => {
  const clientId = process.env.LINKEDIN_CLIENT_ID;
  const redirectUri = process.env.LINKEDIN_REDIRECT_URI;
  const scope = 'r_liteprofile r_emailaddress';

  const url = `https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}`;
  res.redirect(url);
};

exports.handleCallback = async (req, res) => {
  const { code } = req.query;
  const { LINKEDIN_CLIENT_ID, LINKEDIN_CLIENT_SECRET, LINKEDIN_REDIRECT_URI } = process.env;

  try {
    const tokenRes = await axios.post(`https://www.linkedin.com/oauth/v2/accessToken`, null, {
      params: {
        grant_type: 'authorization_code',
        code,
        redirect_uri: LINKEDIN_REDIRECT_URI,
        client_id: LINKEDIN_CLIENT_ID,
        client_secret: LINKEDIN_CLIENT_SECRET,
      },
    });

    const accessToken = tokenRes.data.access_token;

    // Aqui podemos buscar o perfil do usuário com o token:
    const profileRes = await axios.get('https://api.linkedin.com/v2/me', {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    });

    res.json({
      message: 'Autenticado com sucesso',
      profile: profileRes.data,
      token: accessToken
    });

  } catch (error) {
    res.status(500).json({ error: error.toString() });
  }
};

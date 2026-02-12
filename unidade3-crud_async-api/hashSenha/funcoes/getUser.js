export function getUser (req, res) {
    res.json({ message: `Bem-vindo! Seu ID é ${req.user.userId}` });
};
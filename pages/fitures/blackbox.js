/*
   * by balzz
   * dont delate my wm
   * follow more instagram: @iqstore78
*/
const axios = require("axios")

module.exports = async (req, res) => {

  const q = req.query.q

  if (!q) {
    return res.status(400).json({
      error: "Mau nanya apa lu njir"
    })
  }

  const url = `https://itzpire.com/ai/blackbox-ai?q=${q}`

  try {
    const response = await axios.get(url)
    const data = response.data.result
    res.status(200).json({
      data
    })
  } catch (error) {
    res.status(500).json({
      error: "Ada masalah, coba lagi nanti"
    })
  }
}
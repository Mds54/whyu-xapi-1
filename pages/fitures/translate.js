/*
   * by balzz
   * dont delate my wm
   * follow more instagram: @iqstore78
*/
const axios = require("axios")

module.exports = async (req, res) => {
  const q = req.query.q
  const text = req.query.text

  if (!q) {
    return res.status(400).json({
      error: "Masukkan Kode Bahasa!"
    })
  }
  
  if (!text) {
  return res.status(400).json({
  error: "Mana Teksnya"
  })
  }

  let url = `https://api.popcat.xyz/translate?to=${q}&text=${text}`

  try {
    const response = await axios.get(url)
    const data = response.translated

    res.status(200).json({
      data
    })
  } catch (error) {
    res.status(500).json({
      error: "Ada masalah, coba lagi nanti"
    })
  }
}
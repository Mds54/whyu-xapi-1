/*
   * by balzz
   * dont delate my wm
   * follow more instagram: @iqstore78
*/
const axios = require("axios")

module.exports = async (req, res) => {
  const urls = req.query.urls

  if (!urls) {
    return res.status(400).json({
      error: "Url Tiktok Nya Mana?"
    })
  }

  let url = `https://api.agatz.xyz/api/tiktok?url=${urls}`

  try {
    const response = await axios.get(url)
    const data = response.data.data
    const videoUrlNoWatermark = data.data.find(item => item.type === "nowatermark").url

    res.status(200).json({
      data: videoUrlNoWatermark
    })
  } catch (error) {
    res.status(500).json({
      error: "Ada masalah, coba lagi nanti"
    })
  }
}

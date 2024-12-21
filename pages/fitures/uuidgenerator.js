const fetch = require("node-fetch")
const axios = require("axios")

module.exports = async (req, res) => {


const data = await fetch(`https://www.uuidgenerator.net/api/version7`)
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: 'XzyyMDS',
                 result
             })
         })
  } catch (error) {
    res.status(500).json({
      error: "Ada masalah, coba lagi nanti"
    })
  }
}
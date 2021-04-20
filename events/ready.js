const chalk = require('chalk')
const moment = require('moment')
const log = message => {
  
    console.log(`${chalk.magenta(moment().format('YYYY-MM h:mm:ss'))} ${message}`)
}

module.exports = async client => {
  console.log(`[${client.user.username}] İle Giriş Yapıldı`)
  console.log('LynchR - wwww.awmbilisim.com')
 setInterval(function() {
}, 8000);
  let tarih = moment().format('l');
    client.user.setPresence({activity:{name:`www.awmbilisim.com`},status: 'online'}, {type: 'LISTENING'})
    log(chalk.green(`www.awmbilisim.com Sunar.... ${tarih}`))
  }

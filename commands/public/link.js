const { MessageType, Mimetype } = require("@adiwajshing/baileys");

module.exports.command = () => {
  let cmd = ["link", "links", "pvxlink", "pvxlinks"];

  return { cmd, handler };
};

const handler = async (sock, msg, from, args, msgInfoObj) => {
  let { prefix } = msgInfoObj;
  let text =
    "*─「 🔥 JOIN <{ELG}> FAMILY 🔥 」─*\n\n>> https://chat.whatsapp.com/E98WQ9oydBkKjjgLyykfo7 <<";

  sock.sendMessage(from, { text }, { quoted: msg, detectLinks: true });
};

var platform = process.platform;
var arch = process.arch === 'ia32' ? '32' : '64';

platform = platform.indexOf('win') === 0 ? 'win'
         : platform.indexOf('darwin') === 0 ? 'osx'
         : 'linux';

module.exports = {
  isOSX: platform === 'osx',
  isWindows: platform === 'win',
  isLinux: platform === 'linux',
  name: platform + arch,
  type: platform,
  arch: arch,
  
  // Workaround for Plasma 5 (see https://github.com/Sytten/Facebook-Messenger-Desktop/pull/8 )
  isPlasma5: (platform === 'linux' && process.env["KDE_FULL_SESSION"] !== undefined && process.env["KDE_FULL_SESSION"] !== "" && process.env["KDE_SESSION_VERSION"] === "5")
};

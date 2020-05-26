exports.parseServerName = name => name.replace(/^[a-z]|\.[a-z]|_[a-z]/g, match => match.replace(/\.|_/, '').toUpperCase());

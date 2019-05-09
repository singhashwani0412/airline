# https://www.techiediaries.com/node-sqlite-crud/
# https://download.sqlitebrowser.org/DB.Browser.for.SQLite-3.11.2.dmg
# https://download.sqlitebrowser.org/DB.Browser.for.SQLite-3.11.2-win64.msi
# sqlite on electron video: https://www.youtube.com/watch?v=c76FTxLRwAw
# reference: https://electronjs.org/docs/api/browser-window
#----
DB Browser for SQlite: https://sqlitebrowser.org/
install nodejs
install python2.7 # NOT Python 3
#----
install git

mkdir myapp
cd myapp

# setup git = user, pass, email
#git
git clone https://github.com/singhashwani0412/airline.git #?????
cd airline
git checkout raj-electron1
#----

important initial files: package.json ipc-main.js index.html
#npm init -y
# node app.js
# remember to change index.js to main.js
# you need to code the app.js program
#----
#npm install -g vue/cli
#npm install -g @vue/cli @vue/cli-init
#vue init simulatedgreg/electron-vue weather-app
#npm install --save express
#npm install --save electron sqlite3 knex
#npm install --save electron-router jquery
#npm i --save-dev electron-rebuild
#electron-rebuild -f -w sqlite3
### npm install jquery --save
npm install
#npm rebuild
# conda activate python2
npm run rebuild
# conda deactivate

npm start
#----
# CLEANUP:

rm -fr package-lock.json node_modules
#----

#----
TDB: read/write JSON

# myc2

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


[23/03 14:28] HODIEB SOBGWY Sidney
    
create heroku app and connect to gitlab


heroku create sidytest <br>
heroku git:remote -a tp-3il-sidney
add file : Procfile and insert -> web: python main.py
add file : runtime.txt and insert -> python-3.9.2
edit main add from os import environ
edit main add run(host='0.0.0.0', port=environ.get('PORT', 8080))
heroku config:remove PORT 
git add .
git commit -m "'
git push heroku master
 





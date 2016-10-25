# Automatize tasks in github with alias. 
## Description
 This package add aliases to improve your performace. For example if you want
 do a add, commit and push directly. You can use the option git cif

## Install

```npm install -g automagit```

## Options

```
automatize [OPTIONS]
        default install all aliases
		-d --delete  remove all aliases automatize -d
		-h --help show help
		-v show package version -v
```

## This alias will add:

```bash
    git ci  --> git add + commit.                                                                   
    git cif --> git add + commit with text no relevants changes.                                    
    git cif --> git add + commit with text no relevants changes.                                   
    git f   --> git add + commit + push.                                                             
    git ff  --> git add + commit + push + update npm package.                                        
    git fff --> git add + commit + increase version npm in package.json + push + update npm package. 
```
###Examples:

```git ci "changes"```


![git ci](http://oi65.tinypic.com/23ucvns.jpg)


```git cif```


![git cif](http://oi63.tinypic.com/28b45s6.jpg)


```git f```


![git cif](http://oi64.tinypic.com/2s0hlc8.jpg)



```git ff```


### IMPORTANT

to use this option first update the version in the package.json
**The option ```git fff``` update the version automatic



![git cif](http://oi65.tinypic.com/rshtus.jpg)

```git fff```


![git cif](http://oi66.tinypic.com/vq4bgi.jpg)
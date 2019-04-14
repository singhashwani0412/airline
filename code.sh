#!/bin/bash

cat head.html <(ruby seats.rb) form.html script.js.html boardingpass.html tail.html > y.html
open -a Firefox.app y.html 

#ruby -e 'puts "<html><head><title></title></head><body><svg width=\"500\" height=\"100\">";rows=1..36;cols="A".."F";rows.each{|r| x=r*12;cols.each {|c| y=12*(c.ord-"A".ord+1);printf("<circle cx=\"%d\", cy=\"%d\", r=\"5\", id=\"%2d%c\" />\n",x,y,r,c);}}; puts "</svg></body></html>"'  > ~/Downloads/y.html ; open -a Firefox.app ~/Downloads/y.html

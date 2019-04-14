#!/usr/bin/env ruby
    puts '    <svg width="1200" height="250">'
    puts '        <rect x="0" y="0" width="1200" height="200"/>'
    printf ""
    rows = 1..36
    cols = 'A'..'F'
    rows.each{ |r|
        x = r*30
        cols.each { |c|
            y = 30*(6-c.ord+'A'.ord);
            printf("        <circle class='empty' cx='%d' cy='%d' r='12' id='%d%c' />",x,y,r,c);
            printf(" <text x='%d' y='%d'>%d%s</text>\n",x-8,y+5,r,c);
         }
     }
    puts '    </svg>'

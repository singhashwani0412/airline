        function showValues() {
          var fields = $( ":input" ).serializeArray();

          jsn = "#pass_json";
          sql = "#pass_sql";
          sqlvals = "";
          first = true;
          $( jsn ).empty();
          $( jsn ).append("{");
          $( sql ).empty();
          $( sql ).append("INSERT INTO Passengers (");
          sqlvals += "VALUES (";
          jQuery.each( fields, function( i, field ) {
            var comma = first?"":",";
            $( sql ).append( comma + " " + field.name );
            sqlvals += comma + "'" + field.value + "'";
            $( jsn ).append( comma+"'"+field.name + "' : '"+field.value + "'" );
            $("#bp_"+field.name).empty();
            $("#bp_"+field.name).append(field.value);
            first = false;
          });
          $( jsn ).append("}");
          $( sql ).append(") ");
          sqlvals += ");";
          $( sql ).append(" " + sqlvals);
        }

        function objectifyForm(formArray) {//serialize data function
          var returnArray = {};
          for (var i = 0; i < formArray.length; i++){
            returnArray[formArray[i]['buyTicket']] = formArray[i]['value'];
          }
          return returnArray;
        }

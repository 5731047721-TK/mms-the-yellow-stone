
<!DOCTYPE html>
<html lang="en">
  <head>
    <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.1/css/bootstrap.min.css">
    <script src="//maxcdn.bootstrapcdn.com/bootstrap/3.3.1/js/bootstrap.min.js"></script>
    <style>
        h1 {
            color:royalblue;
            font-family: System Bold;
            font-size: 300%;
        }
    </style>
    <title>Add New Room</title>
  </head>
  <body>
    <div>
      <nav class="navbar navbar-inverse" role="navigation" style="padding-left:130px;">
          <ul class="nav navbar-nav">
            <!--didnt link the route on sever.js yet-->
            <li><a href="/index">Home</a></li>
            <li><a href="/index">Dormitory</a></li>
            <li class="active"><a href="/addDorm">Room<span class="sr-only">(current)</span></a></li>
            <li><a href="/search">Search</a></li>
            <li><a href="/contact">Contact us</a></li>
          </ul>
      </nav>
      </div>
    <br/>
    <h1 align="center" >Add New Rooms </h1>
    <div class="panel-body">
      <!--didnt link the route on sever.js yet-->
      <form method="post" action="/addRoom">
        <div class="row">
          <div class="col-sm-3"></div>
          <div class="col-xs-6">
            <h4>ขนาดห้อง(ตร.ม.)</h4>
            <input type="text" name="input_rid" placeholder="10.0" onfocus="this.removeAttribute('placeholder')" onblur="placeholder='10.0'" class="form-control">
          </div>
          
        </div>
        <div class="row">
            <div class="col-sm-3"></div>
            <div class="col-sm-3">
              <h4>ค่าใช้จ่ายต่อเดือน(บาท)</h4>
              <input type="text" name="input_month" placeholder="1000"  onfocus="this.removeAttribute('placeholder')" onblur="placeholder='1000'" class="form-control">
            </div>
            <div class="col-sm-3">
              <h4>ค่าใช้จ่ายรายวัน(บาท)</h4>
              <input type="text" name="input_daily" placeholder="100" onfocus="this.removeAttribute('placeholder')" onblur="placeholder='100'" class="form-control">
            </div>
        </div>
        <div class="row">
          <div class="col-sm-3"></div>
          <div class="col-sm-3">
            <h4>เงินมัดจำ(บาท)</h4>
            <input type="text" name="input_cost" placeholder="-" onfocus="this.removeAttribute('placeholder')" onblur="placeholder='100'" class="form-control">
          </div>
      </div>
        <div class="row">
            <br/>
            <br/>
            <div class="col-sm-7"></div>
            <div class="col-sm-1">
              <!--didnt finish cancel button yet-->
              <button type="reset" class="btn btn-md btn-warning">Cancel</button>
            </div>
            <div class="col-sm-1">
                <button type="submit" class="btn btn-md btn-warning">Submit</button>
            </div>
        </div>
      </form>
    </div>
    
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
    <script src="js/bootstrap.min.js"></script>
    
  </body>
</html>
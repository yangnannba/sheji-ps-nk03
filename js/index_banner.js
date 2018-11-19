

document.writeln("<style>");
document.writeln(".banner { text-align:center; position: relative; overflow: auto; width:100%; height:330px; }");
document.writeln(".banner a { display:block; text-align:center; }");
document.writeln(".banner ul { height:330px; overflow:hidden; display:block; zoom:1; }");
document.writeln(".banner li { height:330px; width:100%; float:left; }");
document.writeln(".banner li img { vertical-align:bottom; }");
document.writeln(".banner .arrows { display: none; }");
document.writeln(".banner:hover .arrows, .banner.hover .arrows { display: block; }");
document.writeln(".banner .arrows { width:100%; height:330px; position:relative; z-index: 20; }");
document.writeln(".banner .arrows .prev, .banner .arrows .next { position: absolute; width: 22px; height: 36px; top:-180px; cursor: pointer; text-indent:-99999px }");
document.writeln(".banner .arrows .prev { left: 15px; background: url(././images/leftbtn.png) no-repeat; }");
document.writeln(".banner .arrows .prev:hover { background: url(././images/leftbtn_hover.png) no-repeat; }");
document.writeln(".banner .arrows .next { right:15px; background: url(././images/rightbtn.png) no-repeat; }");
document.writeln(".banner .arrows .next:hover { background: url(././images/rightbtn_hover.png) no-repeat; }");
document.writeln(".dots { position: absolute; width: 100%; height:20px; bottom:10px;text-align: right; font-size: 15px; }");
document.writeln(".dots li{ display:inline-block; margin:0 4px; width:20px; height:20px; border:1px solid #333; float:none; background:#ccc; text-align:center;}");
document.writeln(".dots li.active{background:#0f75bd; color:#fff;}");
document.writeln("</style>");
document.writeln("<div class=\"banner has-dots has-arrows\" style=\"width:960px; height: 330px; overflow: hidden; display: block;\">");
document.writeln("");
document.writeln("  <ul style=\"position: relative; width:960px;height: 330px; display: block;\">");
document.writeln("		<li><a href=\"/swt/\"><img src=\"images/banner01.jpg\" /></a></li>");
/*document.writeln("  		<li><a href=\"/swt/\"><img src=\"/themes/new/static/images/pfpc.jpg\" /></a></li>");*/
/*document.writeln("        <li><a href=\"/zt/hyhd/\"><img src=\"/themes/new/static/images/pcbanner.jpg\" /></a></li>");*/
document.writeln("        <li><a href=\"/swt/\"><img src=\"images/banner02.jpg\" /></a></li>");
document.writeln("  </ul>");
document.writeln("");
document.writeln("");
document.writeln("");
document.writeln("</div>");
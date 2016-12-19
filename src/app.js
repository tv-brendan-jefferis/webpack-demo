import "babel-polyfill";
import cats from "./cats";
import $ from "jquery";

import "./scss/app.scss";

$("<h1>cats</h1>").appendTo("body");
const ul = $("<ul/>").addClass("cats").appendTo("body");
cats.map(cat => {
   $("<li/>").addClass(cat).text(cat).appendTo(ul);
});
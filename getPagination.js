//offset 資料開始位置
//limit 每頁顯示的資料數
//total 總共資料數
const getPagination = (offset, limit, total) => {
	let totalPage = Math.ceil(total/limit);
	let currentPage = Math.ceil(offset/limit)+1;
	let pages = Array.from(Array(5).keys()).map(i => (currentPage) + i);
	console.log("currentPage ="+currentPage+" totalPage ="+totalPage+" renderPages = "+pages);
}
getPagination(0,5,33);
getPagination(4,5,33);
getPagination(5,5,33);
getPagination(10,5,33);
getPagination(15,5,33);

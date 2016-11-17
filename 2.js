function ListNode(val1) {
	this.val = val1;
	this.next = null;
}

var addTwoNumbers = function(l1,l2) {
	
	var result = new ListNode(0);
	var current = result;
	var last = 0;

	var val = 0;
	while (l1) {
		val = last;
		if (l1) {
			val += l1.val;	
			l1 = l1.next;
		}
		if (l2) {
			val += l2.val;
			l2 = l2.next;		
		}	
		// console.log("val:" + val);
		last = val / 10;
		val = val % 10;
		current.next = new ListNode(parseInt(val));
		// console.log('add:' + current.next.val);
		current = current.next
	}
	if (last == 1) {
		current.next = new ListNode(1)
	}
	return result.next
}

var a = new ListNode(2)
a.next = new ListNode(4)
a.next.next = new ListNode(6)

var b = new ListNode(5);
b.next = new ListNode(6);
b.next.next = new ListNode(1);

var result = addTwoNumbers(a,b)
console.log(result.val,result.next.val,result.next.next.val);
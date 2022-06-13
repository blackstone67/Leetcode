//Definition for singly-linked list.
class ListNode {
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}
function addTwoNumbers(l1, l2) {
    let result;
    let a;
    a = [];
    let n = 0;
    while (l1 != null || l2 != null) {
        if (l1 != null) {
            if (a[n] == undefined) {
                a[n] = l1.val;
            }
            else {
                a[n] += l1.val;
            }
            l1 = l1.next;
        }
        if (l2 != null) {
            if (a[n] == undefined) {
                a[n] = l2.val;
            }
            else {
                a[n] += l2.val;
            }
            l2 = l2.next;
        }
        if (a[n] >= 10) {
            a[n] = a[n] - 10;
            a[n + 1] = 1;
        }
        n++;
    }
    n = a.length;
    for (let i = n - 1; i >= 0; i--) {
        let lstNodeTemp;
        lstNodeTemp = new ListNode();
        lstNodeTemp.val = a[i];
        if (result == undefined) {
            result = new ListNode();
            result.val = a[i];
        }
        else {
            lstNodeTemp.next = result;
            result = lstNodeTemp;
        }
    }
    return result;
}
;
let l1;
l1 = new ListNode();
l1.next = new ListNode();
l1.next.next = new ListNode();
//l1.next.next.next = new ListNode();
//l1.next.next.next.next = new ListNode();
//l1.next.next.next.next.next = new ListNode();
//l1.next.next.next.next.next.next = new ListNode();
l1.val = 2;
l1.next.val = 4;
l1.next.next.val = 9;
//l1.next.next.next.val = 9;
//l1.next.next.next.next.val = 9;
//l1.next.next.next.next.next.val = 9;
//l1.next.next.next.next.next.next.val = 9;
let l2;
l2 = new ListNode();
l2.next = new ListNode();
l2.next.next = new ListNode();
l2.next.next.next = new ListNode();
l2.val = 5;
l2.next.val = 6;
l2.next.next.val = 4;
l2.next.next.next.val = 9;
addTwoNumbers(l1, l2);
//# sourceMappingURL=app.js.map
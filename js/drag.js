//Es5 构造函数Point
function Point(x, y) {
    this.x = x;
    this.y = y;
}

Point.prototype.toString = function () {
    return '(' + this.x + ', ' + this.y + ')';
};

var p = new Point(1, 2);
console.log(p);
console.log(p.toString());

//Es6 Point_1类的构造方法

class Point_1 {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    toString() {
        return `(${this.x},${this.y})`
    }
}

let p1 = new Point_1(2, 3);
console.log(p1);
console.log(p1.toString());

// Es5 构造函数Point===Es6 Point_1类的构造方法

// Point === Point.prototype.constructor

class Drag {

    //constructor  构造方法 this 实例对象
    constructor(ele) {
        this.ele = ele;
        [this.originX, this.originY, this.dragTag] = [0, 0, false];
        this.ele.addEventListener('mousedown', this.startDrag.bind(this));
        document.addEventListener('mousemove', this.onDragging.bind(this));
        document.addEventListener('mouseup', this.endDrag.bind(this))
    }

    startDrag(e) {
        e = e || window.target;
        this.dragTag = true;
        let {offsetX, offsetY} = e;
        [this.originX, this.originY] = [offsetX, offsetY];

    }

    onDragging(e) {
        e = e || window.target;
        if (this.dragTag) {
            let left = +(e.clientX - this.originX);
            let top = +(e.clientY - this.originY);
            let {clientWidth, clientHeight} = document.body;
            [clientWidth, clientHeight] = [clientWidth - this.ele.clientWidth, clientHeight - this.ele.clientHeight];
            [left, top] = [Math.max(0, left), Math.max(0, top)];
            [left, top] = [Math.min(clientWidth, left), Math.min(clientHeight, top)];
            if (this.validatePos(left, top)) {
                this.ele.style.left = left + 'px';
                this.ele.style.top = top + 'px';
            }
        }

    }

    endDrag(e) {
        // e = e || window.target;
        if (this.dragTag) {
            document.removeEventListener('mousemove', () => {
            });
            document.removeEventListener('mouseup', () => {
            });
            this.dragTag = false;
        }


    }

    validatePos(left, top) {
        if (Number.isNaN(left) || Number.isNaN(top)) {
            return false;
        }
        return true;

    }

}

// debugger
console.log(typeof Drag);//function

// 类的数据类型就是函数，类本身就指向构造函数。


let ele = document.getElementById('drop_box');
let drag = new Drag(ele);

angular.module("ic.model", [])
    .factory('icModel', function () {
        var id = 1;
        var data = [new Guest("刘谦","16612123232"),new Guest("nzm","18812345678")];

        function Guest(name, phone) {
            this.name = name;
            this.phone = phone;
            this.id = id++;
            this.state = "已报名";
        }

        Guest.prototype.paid = function () {
            console.log(this.name + '已付款')
            this.state = '已付款'
        };


        Guest.prototype.refuse = function () {
            this.state = '未付款'
        };

        return {
            getNameList: function () {
                return data.slice(0);
            },
            add: function (name, phoneNumber) {
                data.push(new Guest(name, phoneNumber));
                return id;
            },
            remove: function (item) {
                var index = data.indexOf(item);
                data.splice(index, 1);
            }
        }
    });
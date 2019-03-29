"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var App = (function (_super) {
    __extends(App, _super);
    function App(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            currentTask: "",
            tasks: []
        };
        return _this;
    }
    App.prototype.handleSubmit = function (e) {
        e.preventDefault();
        this.setState({
            currentTask: "",
            tasks: this.state.tasks.concat([
                {
                    id: this._timeInMilliseconds(),
                    value: this.state.currentTask,
                    completed: false
                }
            ])
        });
    };
    App.prototype.deleteTask = function (id) {
        var tasks = this.state.tasks.filter(function (task) { return task.id !== id; });
        this.setState({ tasks: tasks });
    };
    App.prototype.toggleDone = function (index) {
        var task = this.state.tasks.splice(index, 1);
        task[0].completed = !task[0].completed;
        debugger;
        var tasks = this.state.tasks.concat(task);
        this.setState({ tasks: tasks });
    };
    App.prototype.renderTasks = function () {
        var _this = this;
        return this.state.tasks.map(function (task, index) {
            return (React.createElement("div", { key: task.id, className: "tdl-task" },
                React.createElement("span", { className: task.completed ? "is-completed" : "" }, task.value),
                React.createElement("button", { onClick: function () { return _this.deleteTask(task.id); } }, "Delete"),
                React.createElement("button", { onClick: function () { return _this.toggleDone(index); } },
                    " ",
                    task.completed ? "Undo" : "Done")));
        });
    };
    App.prototype.render = function () {
        var _this = this;
        console.log(this.state);
        return (React.createElement("div", null,
            React.createElement("h1", null, "React Typescript Todo List"),
            React.createElement("form", { onSubmit: function (e) { return _this.handleSubmit(e); } },
                React.createElement("input", { type: "text", className: "tdl-input", placeholder: "Add a Task", value: this.state.currentTask, onChange: function (e) { return _this.setState({ currentTask: e.target.value }); } }),
                React.createElement("button", { type: "submit" }, "Add Task")),
            React.createElement("section", null, this.renderTasks())));
    };
    App.prototype._timeInMilliseconds = function () {
        var date = new Date();
        return date.getTime();
    };
    return App;
}(React.Component));
exports.App = App;
//# sourceMappingURL=App.js.map
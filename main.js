import { ToyReact, Component } from './ToyReact'

class Mycomponent extends Component {
  render() {
    return (
      <div>
        <div>{this.children}</div>
        <span>hello</span>
        <span>world!</span>
        <div></div>
      </div>
    )
  }
}

class SubComponent extends Component {
  render() {
    return <div>sub component</div>
  }
}

let a = (
  <Mycomponent name="a" id="ida">
    123
    <SubComponent></SubComponent>
  </Mycomponent>
)

ToyReact.render(a, document.body)

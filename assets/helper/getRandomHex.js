import { randomColor } from 'randomcolor'

export default () => {
    return randomColor().replace('#', '')
}

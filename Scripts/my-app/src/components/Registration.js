var React = require('react')
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import validator from 'validator';

const required = (value) => {
    if (!value.toString().trim().length) {
        return 'please, input value';
    }
};

const email = (value) => {
    if (!validator.isEmail(value)) {
        return `${value} is not a valid email.`
    }
};

export default class RegistrtionForm extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="login-wrap">
            <form onSubmit={() => this.props.visibleProfile(this.props.name,this.props.surname,this.props.pseoudonym,this.props.email,this.props.sphere,this.props.city, this.props.password )}>
                <h2>Registration</h2>

                <div className="form">
                    <Form>
                        <label>Name:</label><br />
                        <Input type="text" validations={[required]} name="name" value={this.props.name} onChange={this.props.onChangeName} placeholder="name" autoFocus/><br />
                        <label>Surname:</label><br />
                        <Input type="text" validations={[required]} name="surname" value={this.props.surname} placeholder="surname" onChange={this.props.onChangeSurname} /><br />
                        <label>Pseoudonym:</label><br />
                        <Input type="text" validations={[required]} name="pseoudonym" value={this.props.pseoudonym} placeholder="pseoudonym" onChange={this.props.onChangepPseoudonym} /><br />
                        <label>E-mail:</label><br />
                        <Input type="text" validations={[required, email]} name="email" value={this.props.email} onChange={this.props.onChangepEmail} placeholder="e-mail" /><br />
                        <label>Sphere:</label><br />
                        <Input type="text" validations={[required]} name="sphere" value={this.props.sphere} onChange={this.props.onChangepSphere} placeholder="sphere" /><br />
                        <label>City:</label><br />
                        <Input type="text" validations={[required]} name="city" value={this.props.city} onChange={this.props.onChangepCity} placeholder="city"/><br />
                        <label>Password:</label><br />
                        <Input type="password" validations={[required]} name="password" value={this.props.password} onChange={this.props.onChangepPassword} placeholder="Password"/><br />
                    </Form>
                    <button disabled={!this.props.name || !this.props.surname || !this.props.pseoudonym || !this.props.email || !this.props.sphere || !this.props.city || !this.props.password} type="submit" >Sign up</button>
                </div>
            </form>
            </div>
        );
    }
}
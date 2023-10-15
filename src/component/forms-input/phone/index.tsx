import { Control, Controller, FieldValues, UseFormRegister } from "react-hook-form"
import PhoneInput from "react-phone-input-2"

type TPhone = {
        control: Control<FieldValues, any>
}

const Phone = ({ control }: TPhone) => {
        return (
                <Controller
                        control={control}
                        name="phone_number"
                        rules={{ required: true }}
                        defaultValue=""
                        render={({ field: { onChange, onBlur, value, name } }) => (
                                <PhoneInput
                                        placeholder="Numéro de téléphone"
                                        inputStyle={{
                                                width: "368px",
                                                height: "56px",
                                                fontSize: "15px",
                                                paddingLeft: "60px",
                                                borderRadius: "5px"
                                        }}
                                        specialLabel="Telephone"
                                        onChange={onChange}
                                        onBlur={onBlur}
                                        value={value}
                                />
                        )}
                />
        )
}

export default Phone
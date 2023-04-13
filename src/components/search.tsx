import { Input, InputProps } from 'antd';

interface SearchProps extends InputProps {
    placeholder: string;
    onSearch: (value: string) => void;
}

export const SearchInput =({ placeholder, onSearch, ...inputProps }: SearchProps) => {

return <Input.Search placeholder={placeholder} onSearch={onSearch} enterButton {...inputProps} />

}
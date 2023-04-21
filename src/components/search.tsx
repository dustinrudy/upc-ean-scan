import { Input } from 'antd';
import { SearchProps } from 'antd/es/input';

export const SearchInput =({ placeholder, onSearch, ...inputProps }: SearchProps) => {

return <Input.Search placeholder={placeholder} onSearch={onSearch} enterButton {...inputProps} />

}
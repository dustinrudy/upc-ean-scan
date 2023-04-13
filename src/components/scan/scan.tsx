import { useState } from "react";
import { SearchInput } from "../search";
import { CustomHeader } from "../header";
import { ScanOutlined } from "@ant-design/icons";

export default function UPCScan() {

    const [searchTerm, setSearchTerm] = useState('')

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setSearchTerm(e.target.value)
      };

    return (
        <>
            <CustomHeader text={'Scanner'} icon={<ScanOutlined />} />
            <SearchInput autoFocus showCount maxLength={13} size={'large'} allowClear value={searchTerm} onChange={handleChange} placeholder={'Scan a code to fetch product data...'} onSearch={(value) => console.log('SEARCH', value)} />
        </>
    )

}
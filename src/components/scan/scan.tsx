import { useState } from "react";
import { SearchInput } from "../search";
import { CustomHeader } from "../header";
import { ScanOutlined } from "@ant-design/icons";
import { scanProduct } from "../../api/services/product-service";

export default function UPCScan() {

    const [searchTerm, setSearchTerm] = useState('')
    const [loading, setLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setSearchTerm(e.target.value)
      };

    
    const handleSearch = async (value: string) => {
        setLoading(true);

        const product = await scanProduct(value);

        setLoading(false);

    }

    return (
        <>
            <CustomHeader text={'Scanner'} icon={<ScanOutlined />} />
            <SearchInput loading={loading} disabled={loading} autoFocus showCount maxLength={13} size={'large'} allowClear value={searchTerm} onChange={handleChange} placeholder={'Scan a code to fetch product data...'} onSearch={handleSearch} />
        </>
    )

}
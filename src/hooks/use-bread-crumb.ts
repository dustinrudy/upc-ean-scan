import { useState, useEffect } from "react";
import { BreadcrumbItemType } from "antd/es/breadcrumb/Breadcrumb";
import { useLocation } from "react-router-dom";


const useBreadcrumb = (): BreadcrumbItemType[] => {
  const location = useLocation();
  const [breadcrumb, setBreadcrumb] = useState<BreadcrumbItemType[]>([]);

  useEffect(() => {
    const pathSnippets = location.pathname.split("/").filter((i) => i);
    const breadcrumbItems = [{href: '/', title: 'Home', key: '/'}, ...pathSnippets.map((_, index) => {
      const url = `/${pathSnippets.slice(0, index + 1).join("/")}`;
      const title =
        pathSnippets[index].charAt(0).toUpperCase() +
        pathSnippets[index].slice(1);
      return { href: url, title, key: url };
    })];
    setBreadcrumb(breadcrumbItems);
  }, [location.pathname]);

  return breadcrumb;
};

export default useBreadcrumb;

import { getTruckPage } from '@/services/ant-design-pro/truck';
import { PageContainer } from '@ant-design/pro-components';
import type { ActionType, ProColumns } from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';
import React, { useRef } from 'react';

const TruckList: React.FC = () => {
  const actionRef = useRef<ActionType>(); // ref

  const columns: ProColumns<API.TruckItem>[] = [
    {
      title: 'locationid',
      width: '100px',
      sorter: true,
      dataIndex: 'objectId',
    },
    {
      title: 'Applicant',
      sorter: true,
      hideInSearch: true,
      width: '150px',
      dataIndex: 'applicant',
    },
    {
      title: 'FacilityType',
      sorter: true,
      width: '100px',
      dataIndex: 'facilityType',
    },
    {
      title: 'cnn',
      width: '100px',
      dataIndex: 'cnn',
    },
    {
      hideInSearch: true,
      title: 'address',
      width: '200px',
      dataIndex: 'address',
    },
    {
      hideInSearch: true,
      title: 'blocklot',
      width: '100px',
      dataIndex: 'blockLot',
    },
    {
      hideInSearch: true,
      title: 'block',
      width: '100px',
      dataIndex: 'block',
    },
    {
      title: 'lot',
      hideInSearch: true,
      width: '100px',
      dataIndex: 'lot',
    },
    {
      title: 'Permit',
      hideInSearch: true,
      width: '100px',
      dataIndex: 'permit',
    },
    {
      hideInSearch: true,
      title: 'Status',
      width: '100px',
      dataIndex: 'status',
    },
    {
      title: 'FoodItems',
      hideInSearch: true,
      width: '300px',
      dataIndex: 'foodItems',
    },
    {
      title: 'x',
      hideInSearch: true,
      width: '100px',
      dataIndex: 'x',
    },
    {
      title: 'y',
      width: '100px',
      hideInSearch: true,
      dataIndex: 'y',
    },
    {
      title: 'longitude',
      width: '100px',
      dataIndex: 'longitude',
    },
    {
      title: 'latitude',
      width: '100px',
      dataIndex: 'latitude',
    },
    {
      title: 'Schedule',
      hideInSearch: true,
      width: '100px',
      dataIndex: 'schedule',
    },
    {
      title: 'Approved',
      hideInSearch: true,
      width: '100px',
      dataIndex: 'approved',
    },
    {
      title: 'Received',
      hideInSearch: true,
      width: '100px',
      dataIndex: 'received',
    },
    {
      title: 'PriorPermit',
      hideInSearch: true,
      width: '100px',
      dataIndex: 'priorPermit',
    },
    {
      title: 'ExpirationDate',
      width: '100px',
      hideInSearch: true,
      dataIndex: 'expirationDate',
    },
    {
      title: 'distance',
      width: '100px',
      hideInSearch: true,
      dataIndex: 'distance',
    },
  ];
  return (
    <PageContainer>
      <ProTable<API.TruckItem, API.PageParams>
        headerTitle="Truck"
        actionRef={actionRef}
        rowKey="id"
        search={{
          labelWidth: 120,
          showHiddenNum: true,
        }}
        request={getTruckPage}
        columns={columns}
        scroll={{ x: 'max-content' }}
      />
    </PageContainer>
  );
};

export default TruckList;

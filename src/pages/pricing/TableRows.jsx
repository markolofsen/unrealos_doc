import * as React from 'react';

// material
import Icon from '@mui/material/Icon'
import Collapse from '@mui/material/Collapse';

// components
import SmartIcon from './components/SmartIcon'

// jsx
import RowList from './jsx/RowList'

// styles
import { styled } from '@site/src/styles/snippets'



const RowGroup = styled.div(theme => ({
  // padding: 20,
  // border: `solid 1px rgba(255,255,255, .1)`,
}))

const RowGroupTitle = styled.div(theme => ({
  backgroundColor: 'rgba(0,0,0, .5)',
  padding: '15px 20px',
  borderRadius: 10,
  fontWeight: 700,
}))

const RowGroupWrapper = styled.div(theme => ({
  '&[data-active="true"]': {
    '& > [data-row]': {
      backgroundColor: 'rgba(0,0,0, .3)',
    },
    paddingBottom: 30,
    borderBottom: 'solid 1px rgba(255,255,255, .05)'
  },
  '& [data-row-group="items"]': {
    borderLeft: `solid 3px`,
    borderColor: theme.palette.primary.main,
  },
  '& > [data-row]': {
    cursor: 'pointer',
    userSelect: 'none',
    '&:hover': {
      backgroundColor: 'rgba(0,0,0, .3)',
      // opacity: .7,
    }
  },
  '& [data-li="label"]': {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
  }

}))




const listKeys = ['community', 'business', 'enterprise']



function TableGroupRows({ index, group, menuIndex }) {

  const [isExpanded, setIsExpanded] = React.useState(false)

  return (
    <div key={index}>
      <RowGroupWrapper data-active={isExpanded}>
        <RowList data-row onClick={() => setIsExpanded(c => !c)}>
          <li data-li="label">
            <Icon sx={{ mr: 1 }}>{isExpanded ? 'expand_less' : 'expand_more'}</Icon> {group.label}
          </li>

          {listKeys.map((key, i) => (
            <li key={`${index}-${i}-title`} data-mobile-hidden={index !== menuIndex}>
              {!isExpanded && <Icon>unfold_more</Icon>}
            </li>
          ))}

        </RowList>
        <Collapse in={isExpanded} orientation="vertical">
          <RowGroup data-row-group="items">
            {group.items.map((row, i) => {

              return (
                <RowList data-row key={`${index}-${i}-row`}>
                  <li>
                    {row.label}
                  </li>

                  {listKeys.map((key, i) => {
                    const value = row[key]

                    return (
                      <li key={`${index}-${i}-value`} data-mobile-hidden={i !== menuIndex}>
                        {value}
                      </li>
                    )
                  })}

                </RowList>
              )
            })}
          </RowGroup>
        </Collapse>
      </RowGroupWrapper>
    </div >
  )
}


function renderRow(title, list, menuIndex) {
  return (
    <>
      <RowGroupTitle>
        {title}
      </RowGroupTitle>

      {list.map((item, index) => {
        if (item.type === 'row_group') {
          return (
            <TableGroupRows
              index={index}
              group={item}
              menuIndex={menuIndex} />
          )
        }

        return (
          <RowList data-row key={index}>
            <li>
              {item.label}
            </li>

            {listKeys.map((key, i) => (
              <li key={`${index}-${i}`} data-mobile-hidden={i !== menuIndex}>
                {item[key]}
              </li>
            ))}

          </RowList>
        )
      })}
    </>
  )
}

function TableRows({ menuIndex }) {
  const data = getData()

  return (
    <>
      {renderRow('MetaEditor SDK (open-source)', data.client, menuIndex)}
      {renderRow('UE Plugin (open-source)', data.plugin, menuIndex)}
      {renderRow('Support', data.support, menuIndex)}
    </>
  )
}

export default TableRows

// `
// {
//   label: '',
//   community: <SmartIcon variant="yes" />,
//   business: <SmartIcon variant="yes" />,
//   enterprise: <SmartIcon variant="yes" />,
// },
// `

function getData() {
  return {
    client: [
      {
        label: 'Webrtc connection duration per user session',
        community: '10 min.',
        business: 'Unlimited',
        enterprise: 'Unlimited',
      },
      {
        label: 'Transferring MetaEditor source code for full-scale development.',
        community: <SmartIcon variant="no" />,
        business: <SmartIcon variant="no" />,
        enterprise: <SmartIcon variant="yes" />,
      },
      {
        label: 'Free updates for MetaEditor',
        community: <SmartIcon variant="yes" />,
        business: <SmartIcon variant="yes" />,
        enterprise: <SmartIcon variant="yes" />,
      },
      {
        label: 'White label for domain',
        community: <SmartIcon variant="no" />,
        business: <SmartIcon variant="yes" />,
        enterprise: <SmartIcon variant="yes" />,
      },
      {
        label: 'Theme configuration',
        community: <SmartIcon variant="yes" />,
        business: <SmartIcon variant="yes" />,
        enterprise: <SmartIcon variant="yes" />,
      },
      {
        label: 'Mobile version with video streaming optimizations',
        community: <SmartIcon variant="yes" />,
        business: <SmartIcon variant="yes" />,
        enterprise: <SmartIcon variant="yes" />,
      },
      {
        label: 'Automatic connection to any streaming services',
        community: <SmartIcon variant="yes" />,
        business: <SmartIcon variant="yes" />,
        enterprise: <SmartIcon variant="yes" />,
      },
      {
        label: 'Web Component Library',
        community: <SmartIcon variant="yes" />,
        business: <SmartIcon variant="yes" priority={1} />,
        enterprise: <SmartIcon variant="yes" priority={2} />,
      },
      {
        label: 'Local connection to Unreal Engine IDE',
        community: <SmartIcon variant="yes" />,
        business: <SmartIcon variant="yes" />,
        enterprise: <SmartIcon variant="yes" />,
      },
      {
        label: 'Widget for integrating MetaEditor into any website',
        community: <SmartIcon variant="no" />,
        business: <SmartIcon variant="yes" />,
        enterprise: <SmartIcon variant="yes" />,
      },
      {
        type: 'row_group',
        label: 'Developer tools',
        items: [
          {
            label: 'Connection Status Inspector',
            community: <SmartIcon variant="yes" />,
            business: <SmartIcon variant="yes" />,
            enterprise: <SmartIcon variant="yes" />,
          },
          {
            label: 'Pixel Streaming configuration panel',
            community: <SmartIcon variant="yes" />,
            business: <SmartIcon variant="yes" />,
            enterprise: <SmartIcon variant="yes" />,
          },
          {
            label: (
              <div>
                System command manager
                <small>Tool to export/import commands</small>
                <small>History of commands and callbacks</small>
              </div>
            ),
            community: <SmartIcon variant="yes" />,
            business: <SmartIcon variant="yes" />,
            enterprise: <SmartIcon variant="yes" />,
          },
          {
            label: 'Collective development of commands',
            community: <SmartIcon variant="no" />,
            business: <SmartIcon variant="yes" />,
            enterprise: <SmartIcon variant="yes" />,
          },
          {
            label: 'Notification module for debugging commands and callbacks',
            community: <SmartIcon variant="yes" />,
            business: <SmartIcon variant="yes" />,
            enterprise: <SmartIcon variant="yes" />,
          },
          {
            label: 'Hotkeys for quick access to developer features',
            community: <SmartIcon variant="yes" />,
            business: <SmartIcon variant="yes" />,
            enterprise: <SmartIcon variant="yes" />,
          },
          {
            label: 'Option to reboot streaming server',
            community: <SmartIcon variant="yes" />,
            business: <SmartIcon variant="yes" />,
            enterprise: <SmartIcon variant="yes" />,
          },
        ]
      },
      {
        label: (
          <>
            SDK for application development
            <small>
              iOS, Android, Windows, MacOS
            </small>
          </>
        ),
        community: <SmartIcon variant="no" />,
        business: <SmartIcon variant="no" />,
        enterprise: <SmartIcon variant="yes" />,
      },
    ],
    plugin: [
      {
        label: (
          <>
            Mechanism for testing commands in Standalone mode.
            <small>
              No need to rebuild the project.
            </small>
          </>
        ),
        community: '50 commands',
        business: 'Unlimited',
        enterprise: 'Unlimited',
      },
      {
        label: (
          <>
            Support for standalone mode
            <small>
              Debugging commands without the need to rebuild the project
            </small>
          </>
        ),
        community: <SmartIcon variant="no" />,
        business: <SmartIcon variant="yes" />,
        enterprise: <SmartIcon variant="yes" />,
      },
      {
        label: 'The module for collecting statistics on interaction with the stream',
        community: <SmartIcon variant="no" />,
        business: <SmartIcon variant="no" />,
        enterprise: <SmartIcon variant="yes" />,
      },
    ],
    support: [
      {
        label: 'Community',
        community: <SmartIcon variant="yes" />,
        business: <SmartIcon variant="yes" />,
        enterprise: <SmartIcon variant="yes" />,
      },
      {
        label: 'Bug reports & feature requests',
        community: <SmartIcon variant="yes" priority={0} />,
        business: <SmartIcon variant="yes" priority={1} />,
        enterprise: <SmartIcon variant="yes" priority={2} />,
      },
      {
        label: (
          <>
            Technical advisory.
            <small>
              Subject to fair use policy
            </small>
          </>
        ),
        community: <SmartIcon variant="no" />,
        business: <SmartIcon variant="yes" />,
        enterprise: <SmartIcon variant="yes" />,
      },
      {
        label: 'Guaranteed response time',
        community: <SmartIcon variant="no" />,
        business: '4 business days',
        enterprise: (
          <>
            2 business days
            <small>
              1 business day (priority only)
            </small>
          </>
        ),
      },
      // {
      //   label: 'Pre-screening',
      //   community: <SmartIcon variant="no" />,
      //   business: <SmartIcon variant="no" />,
      //   enterprise: (
      //     <>
      //       <div>
      //         4 hours
      //       </div>
      //       <small>
      //         priority only
      //       </small>
      //     </>
      //   ),
      // },
      {
        label: 'Issue escalation',
        community: <SmartIcon variant="no" />,
        business: <SmartIcon variant="yes" />,
        enterprise: <SmartIcon variant="yes" priority={2} />,
      },
    ]
  }
}


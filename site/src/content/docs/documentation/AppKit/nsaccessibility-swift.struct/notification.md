---
source_path: "documentation/AppKit/nsaccessibility-swift.struct/notification.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/appkit/nsaccessibility-swift.struct/notification"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:nsaccessibilitynotification:0000:0001">NSAccessibility.Notification</span>

<span class="ko-segment" data-segment-id="seg:paragraph:nsaccessibilitynotification:0001:0001">**Framework**: AppKit **Kind**: struct</span>

<span class="ko-segment" data-segment-id="seg:paragraph:nsaccessibilitynotification:0002:0001">알림의 이름입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:nsaccessibilitynotification:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:nsaccessibilitynotification:0004:0001">macOS ?+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
struct Notification
```

## <span class="ko-segment" data-segment-id="seg:heading:topics:0007:0001">Topics</span>

### <span class="ko-segment" data-segment-id="seg:heading:notification-names:0008:0001">알림 이름</span>

- <span class="ko-segment" data-segment-id="seg:list:notification-names:0009:0001"><a href="nsaccessibility-swift.struct/notification/announcementrequested.md">static let announcementRequested: NSAccessibility.Notification</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:notification-names:0010:0001">앱이 사용자에게 알림을 게시해야 할 때 이 알림이 게시됩니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:notification-names:0010:0002">VoiceOver가 활성화되어 있으면 이 알림은 음성 및/또는 점자로 표시됩니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:notification-names:0010:0003">그렇지 않으면 아무 작업도 수행하지 않습니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:notification-names:0011:0001"><a href="nsaccessibility-swift.struct/notification/applicationactivated.md">static let applicationActivated: NSAccessibility.Notification</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:notification-names:0012:0001">이 알림은 앱이 활성화된 후 게시됩니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:notification-names:0012:0002">이 알림은 <code>NSNotificationCenter</code> 인스턴스를 사용하는 대신 <a href="nsaccessibility-swift.struct/post(element:notification:">@@TOKEN_1@@</a>.md) 함수를 사용해 게시해야 합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:notification-names:0013:0001"><a href="nsaccessibility-swift.struct/notification/applicationdeactivated.md">static let applicationDeactivated: NSAccessibility.Notification</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:notification-names:0014:0001">이 알림은 앱이 비활성화된 후 게시됩니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:notification-names:0014:0002">이 알림은 <code>NSNotificationCenter</code> 인스턴스를 사용하는 대신 <a href="nsaccessibility-swift.struct/post(element:notification:">@@TOKEN_1@@</a>.md) 함수를 사용해 게시해야 합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:notification-names:0015:0001"><a href="nsaccessibility-swift.struct/notification/applicationhidden.md">static let applicationHidden: NSAccessibility.Notification</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:notification-names:0016:0001">이 알림은 앱이 숨겨진 후 게시됩니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:notification-names:0016:0002">이 알림은 <code>NSNotificationCenter</code> 인스턴스를 사용하는 대신 <a href="nsaccessibility-swift.struct/post(element:notification:">@@TOKEN_1@@</a>.md) 함수를 사용해 게시해야 합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:notification-names:0017:0001"><a href="nsaccessibility-swift.struct/notification/applicationshown.md">static let applicationShown: NSAccessibility.Notification</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:notification-names:0018:0001">이 알림은 앱이 표시된 후 게시됩니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:notification-names:0018:0002">이 알림은 <code>NSNotificationCenter</code> 인스턴스를 사용하는 대신 <a href="nsaccessibility-swift.struct/post(element:notification:">@@TOKEN_1@@</a>.md) 함수를 사용해 게시해야 합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:notification-names:0019:0001"><a href="nsaccessibility-swift.struct/notification/created.md">static let created: NSAccessibility.Notification</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:notification-names:0020:0001">이 알림은 접근성 요소가 생성된 후 게시됩니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:notification-names:0020:0002">이 알림은 <code>NSNotificationCenter</code> 인스턴스를 사용하는 대신 <a href="nsaccessibility-swift.struct/post(element:notification:">@@TOKEN_1@@</a>.md) 함수를 사용해 게시해야 합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:notification-names:0021:0001"><a href="nsaccessibility-swift.struct/notification/drawercreated.md">static let drawerCreated: NSAccessibility.Notification</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:notification-names:0022:0001">이 알림은 drawer가 나타난 후 게시됩니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:notification-names:0022:0002">이 알림은 <code>NSNotificationCenter</code> 인스턴스를 사용하는 대신 <a href="nsaccessibility-swift.struct/post(element:notification:">@@TOKEN_1@@</a>.md) 함수를 사용해 게시해야 합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:notification-names:0023:0001"><a href="nsaccessibility-swift.struct/notification/focuseduielementchanged.md">static let focusedUIElementChanged: NSAccessibility.Notification</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:notification-names:0024:0001">이 알림은 접근성 요소가 포커스를 획득한 후 게시됩니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:notification-names:0024:0002">이 알림은 <code>NSNotificationCenter</code> 인스턴스를 사용하는 대신 <a href="nsaccessibility-swift.struct/post(element:notification:">@@TOKEN_1@@</a>.md) 함수를 사용해 게시해야 합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:notification-names:0025:0001"><a href="nsaccessibility-swift.struct/notification/focusedwindowchanged.md">static let focusedWindowChanged: NSAccessibility.Notification</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:notification-names:0026:0001">이 알림은 키 창이 변경된 후 게시됩니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:notification-names:0026:0002">이 알림은 <code>NSNotificationCenter</code> 인스턴스를 사용하는 대신 <a href="nsaccessibility-swift.struct/post(element:notification:">@@TOKEN_1@@</a>.md) 함수를 사용해 게시해야 합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:notification-names:0027:0001"><a href="nsaccessibility-swift.struct/notification/helptagcreated.md">static let helpTagCreated: NSAccessibility.Notification</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:notification-names:0028:0001">이 알림은 도움말 태그가 표시된 후 게시됩니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:notification-names:0028:0002">이 알림은 <code>NSNotificationCenter</code> 인스턴스를 사용하는 대신 <a href="nsaccessibility-swift.struct/post(element:notification:">@@TOKEN_1@@</a>.md) 함수를 사용해 게시해야 합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:notification-names:0029:0001"><a href="nsaccessibility-swift.struct/notification/layoutchanged.md">static let layoutChanged: NSAccessibility.Notification</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:notification-names:0030:0001">이 알림은 접근성 클라이언트의 주의가 필요한 방식으로 UI가 변경된 후 게시됩니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:notification-names:0030:0002">이 알림은 키 <a href="nsaccessibility-swift.struct/notificationuserinfokey/uielements.md">@@TOKEN_0@@</a>와 추가되거나 변경된 UI 요소가 포함된 배열이 들어 있는 <code>userInfo</code> 딕셔너리를 함께 전달해야 합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:notification-names:0030:0003">Post this notification using the <a href="nsaccessibility-swift.struct/post(element:notification:">@@TOKEN_0@@</a>.md) function instead of an <code>NSNotificationCenter</code> instance.</span>

- <span class="ko-segment" data-segment-id="seg:list:notification-names:0031:0001"><a href="nsaccessibility-swift.struct/notification/mainwindowchanged.md">static let mainWindowChanged: NSAccessibility.Notification</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:notification-names:0032:0001">This notification is posted after the main window changes.</span> <span class="ko-segment" data-segment-id="seg:paragraph:notification-names:0032:0002">Post this notification using the <a href="nsaccessibility-swift.struct/post(element:notification:">@@TOKEN_0@@</a>.md) function instead of an <code>NSNotificationCenter</code> instance.</span>

- <span class="ko-segment" data-segment-id="seg:list:notification-names:0033:0001"><a href="nsaccessibility-swift.struct/notification/moved.md">static let moved: NSAccessibility.Notification</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:notification-names:0034:0001">This notification is posted after an accessibility element moves.</span> <span class="ko-segment" data-segment-id="seg:paragraph:notification-names:0034:0002">Post this notification using the <a href="nsaccessibility-swift.struct/post(element:notification:">@@TOKEN_0@@</a>.md) function instead of an <code>NSNotificationCenter</code> instance.</span>

- <span class="ko-segment" data-segment-id="seg:list:notification-names:0035:0001"><a href="nsaccessibility-swift.struct/notification/resized.md">static let resized: NSAccessibility.Notification</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:notification-names:0036:0001">This notification is posted after an accessibility element’s size changes.</span> <span class="ko-segment" data-segment-id="seg:paragraph:notification-names:0036:0002">Post this notification using the <a href="nsaccessibility-swift.struct/post(element:notification:">@@TOKEN_0@@</a>.md) function instead of an <code>NSNotificationCenter</code> instance.</span>

- <span class="ko-segment" data-segment-id="seg:list:notification-names:0037:0001"><a href="nsaccessibility-swift.struct/notification/rowcollapsed.md">static let rowCollapsed: NSAccessibility.Notification</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:notification-names:0038:0001">This notification is posted after a row collapses.</span> <span class="ko-segment" data-segment-id="seg:paragraph:notification-names:0038:0002">Post this notification using the <a href="nsaccessibility-swift.struct/post(element:notification:">@@TOKEN_0@@</a>.md) function instead of an <code>NSNotificationCenter</code> instance.</span>

- <span class="ko-segment" data-segment-id="seg:list:notification-names:0039:0001"><a href="nsaccessibility-swift.struct/notification/rowcountchanged.md">static let rowCountChanged: NSAccessibility.Notification</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:notification-names:0040:0001">This notification is posted after a row is added or deleted.</span> <span class="ko-segment" data-segment-id="seg:paragraph:notification-names:0040:0002">Post this notification using the <a href="nsaccessibility-swift.struct/post(element:notification:">@@TOKEN_0@@</a>.md) function instead of an <code>NSNotificationCenter</code> instance.</span>

- <span class="ko-segment" data-segment-id="seg:list:notification-names:0041:0001"><a href="nsaccessibility-swift.struct/notification/rowexpanded.md">static let rowExpanded: NSAccessibility.Notification</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:notification-names:0042:0001">This notification is posted after a row expands.</span> <span class="ko-segment" data-segment-id="seg:paragraph:notification-names:0042:0002">Post this notification using the <a href="nsaccessibility-swift.struct/post(element:notification:">@@TOKEN_0@@</a>.md) function instead of an <code>NSNotificationCenter</code> instance.</span>

- <span class="ko-segment" data-segment-id="seg:list:notification-names:0043:0001"><a href="nsaccessibility-swift.struct/notification/selectedcellschanged.md">static let selectedCellsChanged: NSAccessibility.Notification</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:notification-names:0044:0001">This notification is posted after one or more cells in a cell-based table are selected or deselected.</span> <span class="ko-segment" data-segment-id="seg:paragraph:notification-names:0044:0002">Post this notification using the <a href="nsaccessibility-swift.struct/post(element:notification:">@@TOKEN_0@@</a>.md) function instead of an <code>NSNotificationCenter</code> instance.</span>

- <span class="ko-segment" data-segment-id="seg:list:notification-names:0045:0001"><a href="nsaccessibility-swift.struct/notification/selectedchildrenchanged.md">static let selectedChildrenChanged: NSAccessibility.Notification</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:notification-names:0046:0001">This notification is posted after one or more child elements are selected or deselected.</span> <span class="ko-segment" data-segment-id="seg:paragraph:notification-names:0046:0002">Post this notification using the <a href="nsaccessibility-swift.struct/post(element:notification:">@@TOKEN_0@@</a>.md) function instead of an <code>NSNotificationCenter</code> instance.</span>

- <span class="ko-segment" data-segment-id="seg:list:notification-names:0047:0001"><a href="nsaccessibility-swift.struct/notification/selectedchildrenmoved.md">static let selectedChildrenMoved: NSAccessibility.Notification</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:notification-names:0048:0001">This notification is posted after the selected items in a layout area move.</span> <span class="ko-segment" data-segment-id="seg:paragraph:notification-names:0048:0002">Post this notification using the <a href="nsaccessibility-swift.struct/post(element:notification:">@@TOKEN_0@@</a>.md) function instead of an <code>NSNotificationCenter</code> instance.</span>

- <span class="ko-segment" data-segment-id="seg:list:notification-names:0049:0001"><a href="nsaccessibility-swift.struct/notification/selectedcolumnschanged.md">static let selectedColumnsChanged: NSAccessibility.Notification</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:notification-names:0050:0001">This notification is posted after one or more columns are selected or deselected.</span> <span class="ko-segment" data-segment-id="seg:paragraph:notification-names:0050:0002">Post this notification using the <a href="nsaccessibility-swift.struct/post(element:notification:">@@TOKEN_0@@</a>.md) function instead of an <code>NSNotificationCenter</code> instance.</span>

- <span class="ko-segment" data-segment-id="seg:list:notification-names:0051:0001"><a href="nsaccessibility-swift.struct/notification/selectedrowschanged.md">static let selectedRowsChanged: NSAccessibility.Notification</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:notification-names:0052:0001">This notification is posted after one or more rows are selected or deselected.</span> <span class="ko-segment" data-segment-id="seg:paragraph:notification-names:0052:0002">Post this notification using the <a href="nsaccessibility-swift.struct/post(element:notification:">@@TOKEN_0@@</a>.md) function instead of an <code>NSNotificationCenter</code> instance.</span>

- <span class="ko-segment" data-segment-id="seg:list:notification-names:0053:0001"><a href="nsaccessibility-swift.struct/notification/selectedtextchanged.md">static let selectedTextChanged: NSAccessibility.Notification</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:notification-names:0054:0001">This notification is posted after text is selected or deselected.</span> <span class="ko-segment" data-segment-id="seg:paragraph:notification-names:0054:0002">Post this notification using the <a href="nsaccessibility-swift.struct/post(element:notification:">@@TOKEN_0@@</a>.md) function instead of an <code>NSNotificationCenter</code> instance.</span>

- <span class="ko-segment" data-segment-id="seg:list:notification-names:0055:0001"><a href="nsaccessibility-swift.struct/notification/sheetcreated.md">static let sheetCreated: NSAccessibility.Notification</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:notification-names:0056:0001">This notification is posted after a sheet appears.</span> <span class="ko-segment" data-segment-id="seg:paragraph:notification-names:0056:0002">Post this notification using the <a href="nsaccessibility-swift.struct/post(element:notification:">@@TOKEN_0@@</a>.md) function instead of an <code>NSNotificationCenter</code> instance.</span>

- <span class="ko-segment" data-segment-id="seg:list:notification-names:0057:0001"><a href="nsaccessibility-swift.struct/notification/titlechanged.md">static let titleChanged: NSAccessibility.Notification</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:notification-names:0058:0001">This notification is posted after an accessibility element’s title changes.</span> <span class="ko-segment" data-segment-id="seg:paragraph:notification-names:0058:0002">Post this notification using the <a href="nsaccessibility-swift.struct/post(element:notification:">@@TOKEN_0@@</a>.md) function instead of an <code>NSNotificationCenter</code> instance.</span>

- <span class="ko-segment" data-segment-id="seg:list:notification-names:0059:0001"><a href="nsaccessibility-swift.struct/notification/uielementdestroyed.md">static let uiElementDestroyed: NSAccessibility.Notification</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:notification-names:0060:0001">This notification is posted after an accessibility element is destroyed.</span> <span class="ko-segment" data-segment-id="seg:paragraph:notification-names:0060:0002">Post this notification using the <a href="nsaccessibility-swift.struct/post(element:notification:">@@TOKEN_0@@</a>.md) function instead of an <code>NSNotificationCenter</code> instance.</span>

- <span class="ko-segment" data-segment-id="seg:list:notification-names:0061:0001"><a href="nsaccessibility-swift.struct/notification/unitschanged.md">static let unitsChanged: NSAccessibility.Notification</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:notification-names:0062:0001">This notification is posted after the units in a layout area change.</span> <span class="ko-segment" data-segment-id="seg:paragraph:notification-names:0062:0002">Post this notification using the <a href="nsaccessibility-swift.struct/post(element:notification:">@@TOKEN_0@@</a>.md) function instead of an <code>NSNotificationCenter</code> instance.</span>

- <span class="ko-segment" data-segment-id="seg:list:notification-names:0063:0001"><a href="nsaccessibility-swift.struct/notification/valuechanged.md">static let valueChanged: NSAccessibility.Notification</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:notification-names:0064:0001">This notification is posted after an accessibility element’s value changes.</span> <span class="ko-segment" data-segment-id="seg:paragraph:notification-names:0064:0002">Post this notification using the <a href="nsaccessibility-swift.struct/post(element:notification:">@@TOKEN_0@@</a>.md) function instead of an <code>NSNotificationCenter</code> instance.</span>

- <span class="ko-segment" data-segment-id="seg:list:notification-names:0065:0001"><a href="nsaccessibility-swift.struct/notification/windowcreated.md">static let windowCreated: NSAccessibility.Notification</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:notification-names:0066:0001">This notification is posted after a new window appears.</span> <span class="ko-segment" data-segment-id="seg:paragraph:notification-names:0066:0002">Post this notification using the <a href="nsaccessibility-swift.struct/post(element:notification:">@@TOKEN_0@@</a>.md) function instead of an <code>NSNotificationCenter</code> instance.</span>

- <span class="ko-segment" data-segment-id="seg:list:notification-names:0067:0001"><a href="nsaccessibility-swift.struct/notification/windowdeminiaturized.md">static let windowDeminiaturized: NSAccessibility.Notification</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:notification-names:0068:0001">This notification is posted after a window is restored to full size from the Dock.</span> <span class="ko-segment" data-segment-id="seg:paragraph:notification-names:0068:0002">Post this notification using the <a href="nsaccessibility-swift.struct/post(element:notification:">@@TOKEN_0@@</a>.md) function instead of an <code>NSNotificationCenter</code> instance.</span>

- <span class="ko-segment" data-segment-id="seg:list:notification-names:0069:0001"><a href="nsaccessibility-swift.struct/notification/windowminiaturized.md">static let windowMiniaturized: NSAccessibility.Notification</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:notification-names:0070:0001">This notification is posted after a window is put in the Dock.</span> <span class="ko-segment" data-segment-id="seg:paragraph:notification-names:0070:0002">Post this notification using the <a href="nsaccessibility-swift.struct/post(element:notification:">@@TOKEN_0@@</a>.md) function instead of an <code>NSNotificationCenter</code> instance.</span>

- <span class="ko-segment" data-segment-id="seg:list:notification-names:0071:0001"><a href="nsaccessibility-swift.struct/notification/windowmoved.md">static let windowMoved: NSAccessibility.Notification</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:notification-names:0072:0001">This notification is posted after a window moves.</span> <span class="ko-segment" data-segment-id="seg:paragraph:notification-names:0072:0002">Post this notification using the <a href="nsaccessibility-swift.struct/post(element:notification:">@@TOKEN_0@@</a>.md) function instead of an <code>NSNotificationCenter</code> instance.</span>

- <span class="ko-segment" data-segment-id="seg:list:notification-names:0073:0001"><a href="nsaccessibility-swift.struct/notification/windowresized.md">static let windowResized: NSAccessibility.Notification</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:notification-names:0074:0001">This notification is posted after a window’s size changes.</span> <span class="ko-segment" data-segment-id="seg:paragraph:notification-names:0074:0002">Post this notification using the <a href="nsaccessibility-swift.struct/post(element:notification:">@@TOKEN_0@@</a>.md) function instead of an <code>NSNotificationCenter</code> instance.</span>

### <span class="ko-segment" data-segment-id="seg:heading:accessibility-notification-names:0075:0001">Accessibility notification names</span>

- <span class="ko-segment" data-segment-id="seg:list:accessibility-notification-names:0076:0001"><a href="nsaccessibility-swift.struct/notification/nsaccessibilityautocorrectionoccurred.md">static let NSAccessibilityAutocorrectionOccurred: NSAccessibility.Notification</a></span>
- <span class="ko-segment" data-segment-id="seg:list:accessibility-notification-names:0076:0002"><a href="nsaccessibility-swift.struct/notification/nsaccessibilitydraggingdestinationdragaccepted.md">static let NSAccessibilityDraggingDestinationDragAccepted: NSAccessibility.Notification</a></span>
- <span class="ko-segment" data-segment-id="seg:list:accessibility-notification-names:0076:0003"><a href="nsaccessibility-swift.struct/notification/nsaccessibilitydraggingdestinationdragnotaccepted.md">static let NSAccessibilityDraggingDestinationDragNotAccepted: NSAccessibility.Notification</a></span>
- <span class="ko-segment" data-segment-id="seg:list:accessibility-notification-names:0076:0004"><a href="nsaccessibility-swift.struct/notification/nsaccessibilitydraggingdestinationdropallowed.md">static let NSAccessibilityDraggingDestinationDropAllowed: NSAccessibility.Notification</a></span>
- <span class="ko-segment" data-segment-id="seg:list:accessibility-notification-names:0076:0005"><a href="nsaccessibility-swift.struct/notification/nsaccessibilitydraggingdestinationdropnotallowed.md">static let NSAccessibilityDraggingDestinationDropNotAllowed: NSAccessibility.Notification</a></span>
- <span class="ko-segment" data-segment-id="seg:list:accessibility-notification-names:0076:0006"><a href="nsaccessibility-swift.struct/notification/nsaccessibilitydraggingsourcedragbegan.md">static let NSAccessibilityDraggingSourceDragBegan: NSAccessibility.Notification</a></span>
- <span class="ko-segment" data-segment-id="seg:list:accessibility-notification-names:0076:0007"><a href="nsaccessibility-swift.struct/notification/nsaccessibilitydraggingsourcedragended.md">static let NSAccessibilityDraggingSourceDragEnded: NSAccessibility.Notification</a></span>
- <span class="ko-segment" data-segment-id="seg:list:accessibility-notification-names:0076:0008"><a href="nsaccessibility-swift.struct/notification/nsaccessibilitytextinputmarkingsessionbegan.md">static let NSAccessibilityTextInputMarkingSessionBegan: NSAccessibility.Notification</a></span>
- <span class="ko-segment" data-segment-id="seg:list:accessibility-notification-names:0076:0009"><a href="nsaccessibility-swift.struct/notification/nsaccessibilitytextinputmarkingsessionended.md">static let NSAccessibilityTextInputMarkingSessionEnded: NSAccessibility.Notification</a></span>

### <span class="ko-segment" data-segment-id="seg:heading:initializers:0077:0001">Initializers</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0078:0001"><a href="nsaccessibility-swift.struct/notification/init(rawvalue:">init(rawValue: String)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0079:0001">Creates a new instance with the specified raw value.</span>

## <span class="ko-segment" data-segment-id="seg:heading:relationships:0080:0001">Relationships</span>

### <span class="ko-segment" data-segment-id="seg:heading:conforms-to:0081:0001">Conforms To</span>

- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0082:0001"><a href="../Swift/Equatable.md">Equatable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0082:0002"><a href="../Swift/Hashable.md">Hashable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0082:0003"><a href="../Swift/RawRepresentable.md">RawRepresentable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0082:0004"><a href="../Swift/Sendable.md">Sendable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0082:0005"><a href="../Swift/SendableMetatype.md">SendableMetatype</a></span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0083:0001">See Also</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0084:0001"><a href="nsaccessibility-swift.struct/action.md">NSAccessibility.Action</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0085:0001">Constants that describe types of actions.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0086:0001"><a href="nsaccessibility-swift.struct/annotationattributekey.md">NSAccessibility.AnnotationAttributeKey</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0087:0001">Keys for annotation attributes.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0088:0001"><a href="nsaccessibility-swift.struct/attribute.md">NSAccessibility.Attribute</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0089:0001">Constants that describe attributes.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0090:0001"><a href="nsaccessibility-swift.struct/fontattributekey.md">NSAccessibility.FontAttributeKey</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0091:0001">Keys for font attributes.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0092:0001"><a href="nsaccessibility-swift.struct/notificationuserinfokey.md">NSAccessibility.NotificationUserInfoKey</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0093:0001">The key in the user info dictionary for a notification.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0094:0001"><a href="nsaccessibility-swift.struct/orientationvalue.md">NSAccessibility.OrientationValue</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0095:0001">Values that indicate the orientation of user interface elements, such as scroll bars and split views.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0096:0001"><a href="nsaccessibility-swift.struct/parameterizedattribute.md">NSAccessibility.ParameterizedAttribute</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0097:0001">Values that describe parameterized attributes.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0098:0001"><a href="nsaccessibility-swift.struct/role.md">NSAccessibility.Role</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0099:0001">Values that describe types of objects that accessibility elements represent.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0100:0001"><a href="nsaccessibility-swift.struct/rulermarkertypevalue.md">NSAccessibility.RulerMarkerTypeValue</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0101:0001">Values that describe ruler marker types.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0102:0001"><a href="nsaccessibility-swift.struct/rulerunitvalue.md">NSAccessibility.RulerUnitValue</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0103:0001">Values that indicate the unit values of a ruler or layout area.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0104:0001"><a href="nsaccessibility-swift.struct/sortdirectionvalue.md">NSAccessibility.SortDirectionValue</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0105:0001">Values that indicate the sort direction of a column.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0106:0001"><a href="nsaccessibility-swift.struct/subrole.md">NSAccessibility.Subrole</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0107:0001">Values that describe specialized object subtypes that accessibility elements represent.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0109:0001">*<a href="https://developer.apple.com/documentation/appkit/nsaccessibility-swift.struct/notification">View on Apple Developer</a>*</span>

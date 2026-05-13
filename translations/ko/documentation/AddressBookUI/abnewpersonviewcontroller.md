---
source_path: "documentation/AddressBookUI/abnewpersonviewcontroller.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/addressbookui/abnewpersonviewcontroller"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:abnewpersonviewcontroller:0000:0001">ABNewPersonViewController</span>

<span class="ko-segment" data-segment-id="seg:paragraph:abnewpersonviewcontroller:0001:0001">**Framework**: Address Book UI **Kind**: class</span>

<span class="ko-segment" data-segment-id="seg:paragraph:abnewpersonviewcontroller:0002:0001">연락처를 생성하는 인터페이스를 제공하는 뷰 컨트롤러입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:abnewpersonviewcontroller:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:abnewpersonviewcontroller:0004:0001">iOS 2.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:abnewpersonviewcontroller:0004:0002">iPadOS 2.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:abnewpersonviewcontroller:0004:0003">Mac Catalyst 13.1+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
class ABNewPersonViewController
```

#### <span class="ko-segment" data-segment-id="seg:heading:overview:0007:0001">Overview</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0008:0001">New-person 뷰 컨트롤러는 연락처(<code>ABPersonRef</code>)를 생성하고 해당 속성을 편집하기 위해 사용되는 뷰 컨트롤러 집합을 관리하는 모달 뷰 컨트롤러입니다.</span>

> <span class="ko-segment" data-segment-id="seg:blockquote:overview:0009:0001">❗ **중요**: New-person 뷰 컨트롤러는 정상 동작을 위해 내비게이션 컨트롤러와 함께 사용해야 합니다.</span> <span class="ko-segment" data-segment-id="seg:blockquote:overview:0009:0002">새 연락처 뷰 컨트롤러를 모달 방식으로 표시할 것을 권장합니다.</span>

##### <span class="ko-segment" data-segment-id="seg:heading:subclassing:0010:0001">Subclassing</span>

<span class="ko-segment" data-segment-id="seg:paragraph:subclassing:0011:0001"><code>ABNewPersonViewController</code> 클래스는 서브클래싱을 지원하지 않습니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:topics:0012:0001">Topics</span>

### <span class="ko-segment" data-segment-id="seg:heading:responding-to-view-controller-interactions:0013:0001">뷰 컨트롤러 상호작용 처리</span>

- <span class="ko-segment" data-segment-id="seg:list:responding-to-view-controller-interactions:0014:0001"><a href="abnewpersonviewcontroller/newpersonviewdelegate.md">var newPersonViewDelegate: (any ABNewPersonViewControllerDelegate)?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:responding-to-view-controller-interactions:0015:0001">new-person 뷰 컨트롤러의 델리게이트입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:responding-to-view-controller-interactions:0016:0001"><a href="abnewpersonviewcontrollerdelegate.md">protocol ABNewPersonViewControllerDelegate</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:responding-to-view-controller-interactions:0017:0001"><code>ABNewPersonViewControllerDelegate</code> 프로토콜은 <a href="abnewpersonviewcontroller.md">@@TOKEN_1@@</a> 델리게이트가 구현해야 하는 인터페이스를 선언합니다.</span>

### <span class="ko-segment" data-segment-id="seg:heading:displaying-person-properties:0018:0001">사람 속성 표시</span>

- <span class="ko-segment" data-segment-id="seg:list:displaying-person-properties:0019:0001"><a href="abnewpersonviewcontroller/displayedperson.md">var displayedPerson: ABRecord?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:displaying-person-properties:0020:0001">Optional.</span> <span class="ko-segment" data-segment-id="seg:paragraph:displaying-person-properties:0020:0002">새 연락처 뷰 컨트롤러가 뷰에서 미리 채우는 사람 속성을 지정합니다.</span>

### <span class="ko-segment" data-segment-id="seg:heading:configuring-new-person-views:0021:0001">새 연락처 뷰 구성</span>

- <span class="ko-segment" data-segment-id="seg:list:configuring-new-person-views:0022:0001"><a href="abnewpersonviewcontroller/addressbook.md">var addressBook: ABAddressBook?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:configuring-new-person-views:0023:0001">Optional.</span> <span class="ko-segment" data-segment-id="seg:paragraph:configuring-new-person-views:0023:0002">새 연락처가 추가되는 주소록입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:configuring-new-person-views:0024:0001"><a href="abnewpersonviewcontroller/parentgroup.md">var parentGroup: ABRecord?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:configuring-new-person-views:0025:0001">Optional.</span> <span class="ko-segment" data-segment-id="seg:paragraph:configuring-new-person-views:0025:0002">저장 시 새 연락처를 추가할 그룹을 지정합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:relationships:0026:0001">Relationships</span>

### <span class="ko-segment" data-segment-id="seg:heading:inherits-from:0027:0001">상속</span>

- <span class="ko-segment" data-segment-id="seg:list:inherits-from:0028:0001"><a href="../UIKit/UIViewController.md">UIViewController</a></span>

### <span class="ko-segment" data-segment-id="seg:heading:conforms-to:0029:0001">준수</span>

- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0030:0001"><a href="../Swift/CVarArg.md">CVarArg</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0030:0002"><a href="../Swift/CustomDebugStringConvertible.md">CustomDebugStringConvertible</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0030:0003"><a href="../Swift/CustomStringConvertible.md">CustomStringConvertible</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0030:0004"><a href="../Swift/Equatable.md">Equatable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0030:0005"><a href="../Swift/Hashable.md">Hashable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0030:0006"><a href="../Foundation/NSCoding.md">NSCoding</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0030:0007"><a href="../Foundation/NSExtensionRequestHandling.md">NSExtensionRequestHandling</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0030:0008"><a href="../ObjectiveC/NSObjectProtocol.md">NSObjectProtocol</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0030:0009"><a href="../AppKit/NSTouchBarProvider.md">NSTouchBarProvider</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0030:0010"><a href="../Swift/Sendable.md">Sendable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0030:0011"><a href="../Swift/SendableMetatype.md">SendableMetatype</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0030:0012"><a href="../UIKit/UIActivityItemsConfigurationProviding.md">UIActivityItemsConfigurationProviding</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0030:0013"><a href="../UIKit/UIContentContainer.md">UIContentContainer</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0030:0014"><a href="../UIKit/UIFocusEnvironment.md">UIFocusEnvironment</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0030:0015"><a href="doc://com.apple.addressbookui/objc(pl">UIKit.UIAppearanceContainer</a>UIAppearanceContainer)</span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0030:0016"><a href="../UIKit/UIPasteConfigurationSupporting.md">UIPasteConfigurationSupporting</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0030:0017"><a href="../UIKit/UIResponderStandardEditActions.md">UIResponderStandardEditActions</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0030:0018"><a href="../UIKit/UIStateRestoring.md">UIStateRestoring</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0030:0019"><a href="../UIKit/UITraitChangeObservable-67e94.md">UITraitChangeObservable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0030:0020"><a href="../UIKit/UITraitEnvironment.md">UITraitEnvironment</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0030:0021"><a href="../UIKit/UIUserActivityRestoring.md">UIUserActivityRestoring</a></span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0031:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0032:0001"><a href="abpersonviewcontroller.md">class ABPersonViewController</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0033:0001"><code>ABPersonViewController</code> 클래스(인스턴스는 **person view controllers**로 알려짐)는 사람 레코드(<code>ABPersonRef</code>)를 표시하는 데 사용되는 뷰를 구현합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0034:0001"><a href="abunknownpersonviewcontroller.md">class ABUnknownPersonViewController</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0035:0001"><code>ABUnknownPersonViewController</code> 클래스(인스턴스는 **unknown-person view controllers**로 알려짐)는 사람 속성 집합으로 사람 레코드를 생성하는 데 사용되는 뷰 컨트롤러를 구현합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0036:0001">[func ABCreateStringWithAddressDictionary([AnyHashable : Any], Bool) -&gt; String](abcreatestringwithaddressdictionary(_:_:).md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0037:0001">주소 속성에서 서식이 적용된 주소를 반환합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0039:0001">*<a href="https://developer.apple.com/documentation/addressbookui/abnewpersonviewcontroller">View on Apple Developer</a>*</span>

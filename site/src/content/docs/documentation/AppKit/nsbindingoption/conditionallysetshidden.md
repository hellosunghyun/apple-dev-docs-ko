---
source_path: "documentation/AppKit/nsbindingoption/conditionallysetshidden.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/appkit/nsbindingoption/conditionallysetshidden"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:conditionallysetshidden:0000:0001">conditionallySetsHidden</span>

<span class="ko-segment" data-segment-id="seg:paragraph:conditionallysetshidden:0001:0001">**Framework**: AppKit **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:conditionallysetshidden:0002:0001">An <code>NSNumber</code> object containing a Boolean value that determines if the hidden state of the user interface item is automatically configured based on the controller’s selection.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:conditionallysetshidden:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:conditionallysetshidden:0004:0001">macOS ?+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
static let conditionallySetsHidden: NSBindingOption
```

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0007:0001">See Also</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0008:0001"><a href="nsbindingoption/allowseditingmultiplevaluesselection.md">static let allowsEditingMultipleValuesSelection: NSBindingOption</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0009:0001">*<a href="https://developer.apple.com/documentation/accelerate/cpteqr_(_:_:_:_:_:_:_:_:">Apple Developer에서 보기</a>*</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="nsbindingoption/allowsnullargument.md">static let allowsNullArgument: NSBindingOption</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">An <code>NSNumber</code> object containing a Boolean value that determines if the argument bindings allows passing argument values of <code>nil</code>.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="nsbindingoption/alwayspresentsapplicationmodalalerts.md">static let alwaysPresentsApplicationModalAlerts: NSBindingOption</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">A number containing a Boolean value that determines if validation and error alert panels displayed as a result of this binding are displayed as application modal alerts.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="nsbindingoption/conditionallysetseditable.md">static let conditionallySetsEditable: NSBindingOption</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">An <code>NSNumber</code> object containing a Boolean value that determines if the editable state of the user interface item is automatically configured based on the controller’s selection.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="nsbindingoption/conditionallysetsenabled.md">static let conditionallySetsEnabled: NSBindingOption</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">An <code>NSNumber</code> object containing a Boolean value that determines if the enabled state of the user interface item is automatically configured based on the controller’s selection.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="nsbindingoption/contentplacementtag.md">static let contentPlacementTag: NSBindingOption</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">A number that specifies the tag id of the popup menu item to replace with the content of the array.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="nsbindingoption/continuouslyupdatesvalue.md">static let continuouslyUpdatesValue: NSBindingOption</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">An <code>NSNumber</code> object containing a Boolean value that determines whether the value of the binding is updated as edits are made to the user interface item or is updated only when the user interface item resigns as the responder.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001"><a href="nsbindingoption/createssortdescriptor.md">static let createsSortDescriptor: NSBindingOption</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001"><code>NSNumber</code> 객체는 테이블 열에 대한 정렬 설명자를 생성할지 여부를 결정하는 부울 값을 포함합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0024:0001"><a href="nsbindingoption/deletesobjectsonremove.md">static let deletesObjectsOnRemove: NSBindingOption</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001"><code>NSNumber</code> 객체는 관계에서 제거된 직후 관리 콘텍스트에서 객체가 즉시 삭제되는지 여부를 결정하는 부울 값을 포함합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0026:0001"><a href="nsbindingoption/displayname.md">static let displayName: NSBindingOption</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0027:0001"><code>NSString</code> 객체는 술어에 표시할 사람이 읽을 수 있는 문자열을 포함합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0028:0001"><a href="nsbindingoption/displaypattern.md">static let displayPattern: NSBindingOption</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0029:0001"><code>NSString</code> 객체는 문자열의 최종 값을 구성하는 데 사용되는 형식 문자열을 지정합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0030:0001"><a href="nsbindingoption/handlescontentascompoundvalue.md">static let handlesContentAsCompoundValue: NSBindingOption</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0031:0001"><code>NSNumber</code> 객체는 콘텐츠가 복합 값으로 처리되는지 여부를 결정하는 부울 값을 포함합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0032:0001"><a href="nsbindingoption/insertsnullplaceholder.md">static let insertsNullPlaceholder: NSBindingOption</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0033:0001"><code>NSNumber</code> 객체는 콘텐츠 배열의 항목 앞에 <code>nil</code>을 나타내는 추가 항목이 행렬 또는 팝업 메뉴에 삽입되는지 여부를 결정하는 부울 값을 포함합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0034:0001"><a href="nsbindingoption/invokesseparatelywitharrayobjects.md">static let invokesSeparatelyWithArrayObjects: NSBindingOption</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0035:0001"><code>NSNumber</code> 객체는 지정한 selector가 배열을 인수로 호출할지, 아니면 배열의 각 항목을 반복해서 인수로 호출할지 여부를 결정하는 부울 값을 포함합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0036:0001"><a href="nsbindingoption/multiplevaluesplaceholder.md">static let multipleValuesPlaceholder: NSBindingOption</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0037:0001"><code>NSMultipleValuesMarker</code> 마커가 바인딩에서 반환될 때 바인딩된 컨트롤러의 키 경로가 이를 반환하면 사용되는 플레이스홀더 객체입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0039:0001">*<a href="https://developer.apple.com/documentation/appkit/nsbindingoption/conditionallysetshidden">View on Apple Developer</a>*</span>

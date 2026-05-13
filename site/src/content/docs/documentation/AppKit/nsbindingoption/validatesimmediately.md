---
source_path: "documentation/AppKit/nsbindingoption/validatesimmediately.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/appkit/nsbindingoption/validatesimmediately"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:validatesimmediately:0000:0001">validatesImmediately</span>

<span class="ko-segment" data-segment-id="seg:paragraph:validatesimmediately:0001:0001">**Framework**: AppKit **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:validatesimmediately:0002:0001"><code>NSNumber</code> 객체는 바인딩의 내용이 즉시 유효성 검사가 수행되는지 여부를 결정하는 부울 값을 포함합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:validatesimmediately:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:validatesimmediately:0004:0001">macOS ?+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
static let validatesImmediately: NSBindingOption
```

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0007:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0008:0001"><a href="nsbindingoption/allowseditingmultiplevaluesselection.md">static let allowsEditingMultipleValuesSelection: NSBindingOption</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0009:0001"><code>NSNumber</code> 객체는 값이 다중 선택을 나타낼 때 바인딩이 편집을 허용하는지 여부를 결정하는 부울 값을 포함합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="nsbindingoption/allowsnullargument.md">static let allowsNullArgument: NSBindingOption</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001"><code>NSNumber</code> 객체는 인수 바인딩이 <code>nil</code> 인수 값을 허용하는지 여부를 결정하는 부울 값을 포함합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="nsbindingoption/alwayspresentsapplicationmodalalerts.md">static let alwaysPresentsApplicationModalAlerts: NSBindingOption</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001"><code>NSNumber</code> 객체는 이 바인딩의 결과로 표시되는 유효성 검사 및 오류 경고 패널이 애플리케이션 모달 경고로 표시되는지 여부를 결정하는 부울 값을 포함합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="nsbindingoption/conditionallysetseditable.md">static let conditionallySetsEditable: NSBindingOption</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001"><code>NSNumber</code> 객체는 컨트롤러의 선택 항목을 기준으로 사용자 인터페이스 항목의 편집 가능 상태가 자동으로 구성되는지 여부를 결정하는 부울 값을 포함합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="nsbindingoption/conditionallysetsenabled.md">static let conditionallySetsEnabled: NSBindingOption</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001"><code>NSNumber</code> 객체는 컨트롤러의 선택 항목을 기준으로 사용자 인터페이스 항목의 활성화 상태가 자동으로 구성되는지 여부를 결정하는 부울 값을 포함합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="nsbindingoption/conditionallysetshidden.md">static let conditionallySetsHidden: NSBindingOption</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001"><code>NSNumber</code> 객체는 컨트롤러의 선택 항목을 기준으로 사용자 인터페이스 항목의 숨김 상태가 자동으로 구성되는지 여부를 결정하는 부울 값을 포함합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="nsbindingoption/contentplacementtag.md">static let contentPlacementTag: NSBindingOption</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">배열 콘텐츠로 교체할 팝업 메뉴 항목의 태그 ID를 지정하는 숫자입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001"><a href="nsbindingoption/continuouslyupdatesvalue.md">static let continuouslyUpdatesValue: NSBindingOption</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001"><code>NSNumber</code> 객체는 사용자 인터페이스 항목의 편집 시점에 바인딩 값이 업데이트되는지, 아니면 사용자 인터페이스 항목이 반응자(responder)에서 이탈할 때만 업데이트되는지 여부를 결정하는 부울 값을 포함합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0024:0001"><a href="nsbindingoption/createssortdescriptor.md">static let createsSortDescriptor: NSBindingOption</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001"><code>NSNumber</code> 객체는 테이블 열에 대한 정렬 설명자를 생성할지 여부를 결정하는 부울 값을 포함합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0026:0001"><a href="nsbindingoption/deletesobjectsonremove.md">static let deletesObjectsOnRemove: NSBindingOption</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0027:0001"><code>NSNumber</code> 객체는 관계에서 제거된 직후 관리 콘텍스트에서 객체가 즉시 삭제되는지 여부를 결정하는 부울 값을 포함합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0028:0001"><a href="nsbindingoption/displayname.md">static let displayName: NSBindingOption</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0029:0001"><code>NSString</code> 객체는 술어에 표시할 사람이 읽을 수 있는 문자열을 포함합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0030:0001"><a href="nsbindingoption/displaypattern.md">static let displayPattern: NSBindingOption</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0031:0001"><code>NSString</code> 객체는 문자열의 최종 값을 구성하는 데 사용되는 형식 문자열을 지정합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0032:0001"><a href="nsbindingoption/handlescontentascompoundvalue.md">static let handlesContentAsCompoundValue: NSBindingOption</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0033:0001"><code>NSNumber</code> 객체는 콘텐츠가 복합 값으로 처리되는지 여부를 결정하는 부울 값을 포함합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0034:0001"><a href="nsbindingoption/insertsnullplaceholder.md">static let insertsNullPlaceholder: NSBindingOption</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0035:0001"><code>NSNumber</code> 객체는 콘텐츠 배열의 항목 앞에 <code>nil</code>을 나타내는 추가 항목이 행렬 또는 팝업 메뉴에 삽입되는지 여부를 결정하는 부울 값을 포함합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0036:0001"><a href="nsbindingoption/invokesseparatelywitharrayobjects.md">static let invokesSeparatelyWithArrayObjects: NSBindingOption</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0037:0001"><code>NSNumber</code> 객체는 지정된 selector가 배열을 인자로 한 번 호출할지, 또는 배열의 각 항목을 인자로 반복 호출할지를 결정하는 Boolean 값을 포함합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0039:0001">*<a href="https://developer.apple.com/documentation/appkit/nsbindingoption/validatesimmediately">View on Apple Developer</a>*</span>

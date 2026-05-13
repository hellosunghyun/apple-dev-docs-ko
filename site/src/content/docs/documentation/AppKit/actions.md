---
source_path: "documentation/AppKit/actions.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/appkit/actions"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:actions:0000:0001">Actions</span>

<span class="ko-segment" data-segment-id="seg:paragraph:actions:0001:0001">**프레임워크**: AppKit</span>

<span class="ko-segment" data-segment-id="seg:paragraph:actions:0002:0001">접근성 객체가 수행할 수 있는 표준 동작입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:topics:0003:0001">Topics</span>

### <span class="ko-segment" data-segment-id="seg:heading:constants:0004:0001">Constants</span>

- <span class="ko-segment" data-segment-id="seg:list:constants:0005:0001"><a href="nsaccessibility-swift.struct/action/confirm.md">static let confirm: NSAccessibility.Action</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:constants:0006:0001">텍스트 필드와 같은 객체에서 Return 키 입력을 시뮬레이션하는 동작입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:constants:0007:0001"><a href="nsaccessibility-swift.struct/action/decrement.md">static let decrement: NSAccessibility.Action</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:constants:0008:0001">객체의 값을 감소시키는 동작입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:constants:0009:0001"><a href="nsaccessibility-swift.struct/action/delete.md">static let delete: NSAccessibility.Action</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:constants:0010:0001">객체의 값을 삭제하는 동작입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:constants:0011:0001"><a href="nsaccessibility-swift.struct/action/increment.md">static let increment: NSAccessibility.Action</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:constants:0012:0001">객체의 값을 증가시키는 동작입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:constants:0013:0001"><a href="nsaccessibility-swift.struct/action/pick.md">static let pick: NSAccessibility.Action</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:constants:0014:0001">메뉴 항목과 같은 객체를 선택하는 동작입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:constants:0015:0001"><a href="nsaccessibility-swift.struct/action/press.md">static let press: NSAccessibility.Action</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:constants:0016:0001">버튼과 같은 객체를 클릭하는 동작을 시뮬레이션하는 동작입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:constants:0017:0001"><a href="nsaccessibility-swift.struct/action/cancel.md">static let cancel: NSAccessibility.Action</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:constants:0018:0001">작업을 취소하는 동작입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:constants:0019:0001"><a href="nsaccessibility-swift.struct/action/raise.md">static let raise: NSAccessibility.Action</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:constants:0020:0001">제목 표시줄을 클릭해 창을 앞으로 가져오는 동작을 시뮬레이션하는 동작입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:constants:0021:0001"><a href="nsaccessibility-swift.struct/action/scrolltovisibleaction.md">static let scrollToVisibleAction: NSAccessibility.Action</a></span>
- <span class="ko-segment" data-segment-id="seg:list:constants:0021:0002"><a href="nsaccessibility-swift.struct/action/showalternateui.md">static let showAlternateUI: NSAccessibility.Action</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:constants:0022:0001">예를 들어 마우스 호버 이벤트 중 대체 UI를 표시하는 동작입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:constants:0023:0001"><a href="nsaccessibility-swift.struct/action/showdefaultui.md">static let showDefaultUI: NSAccessibility.Action</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:constants:0024:0001">예를 들어 마우스 호버 이벤트 중 원래 또는 기본 UI를 표시하는 동작입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:constants:0025:0001"><a href="nsaccessibility-swift.struct/action/showmenu.md">static let showMenu: NSAccessibility.Action</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:constants:0026:0001">클릭해 메뉴를 표시하는 동작을 시뮬레이션하는 동작입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0027:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0028:0001"><a href="standard-attributes.md">Standard Attributes</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0029:0001">모든 접근성 객체가 채택할 수 있는 표준 특성입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0030:0001"><a href="text-specific-attributes.md">Text-Specific Attributes</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0031:0001">텍스트에 특화된 특성입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0032:0001"><a href="text-specific-parameterized-attributes.md">Text-Specific Parameterized Attributes</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0033:0001">텍스트에 특화된 매개변수 특성입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0034:0001"><a href="text-attributed-string-attributes-and-constants.md">Text Attributed-String Attributes and Constants</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0035:0001">속성 문자열과 함께 사용되는 특성과 주요 상수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0036:0001"><a href="window-specific-attributes.md">Window-Specific Attributes</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0037:0001">창에 특화된 특성입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0038:0001"><a href="app-specific-attributes.md">App-Specific Attributes</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0039:0001">앱 객체에 특화된 특성입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0040:0001"><a href="grid-view-attributes.md">Grid View Attributes</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0041:0001">항목의 그리드를 표시하는 썸네일과 미디어 브라우저 같은 그리드 보기에서 사용되는 특성입니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:see-also:0041:0002">그리드의 자식 항목은 순서대로 정렬됩니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0042:0001"><a href="table-view-and-outline-view-attributes.md">Table View and Outline View Attributes</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0043:0001">테이블과 아웃라인에 특화된 특성입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0044:0001"><a href="outline-view-attributes.md">Outline View Attributes</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0045:0001">아웃라인 보기에서 사용되는 특성입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0046:0001"><a href="cell-based-table-attributes.md">Cell-Based Table Attributes</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0047:0001">셀 기반 테이블에 특화된 특성입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0048:0001"><a href="cell-based-table-parameterized-attributes.md">Cell-Based Table Parameterized Attributes</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0049:0001">셀 기반 테이블에 특화된 매개변수 특성입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0050:0001"><a href="cell-attributes.md">Cell Attributes</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0051:0001">개별 테이블 셀에 특화된 특성입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0052:0001"><a href="layout-area-attributes.md">Layout Area Attributes</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0053:0001">레이아웃 영역에 특화된 특성입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0054:0001"><a href="layout-area-parameterized-attributes.md">Layout Area Parameterized Attributes</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0055:0001">레이아웃 영역에 특화된 매개변수 특성입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0056:0001"><a href="layout-item-attributes.md">Layout Item Attributes</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0057:0001">레이아웃 영역의 항목에 특화된 특성입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0059:0001">*<a href="https://developer.apple.com/documentation/appkit/actions">View on Apple Developer</a>*</span>

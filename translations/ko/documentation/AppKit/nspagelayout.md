---
source_path: "documentation/AppKit/nspagelayout.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/appkit/nspagelayout"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:nspagelayout:0000:0001">NSPageLayout</span>

<span class="ko-segment" data-segment-id="seg:paragraph:nspagelayout:0001:0001">**Framework**: AppKit **Kind**: class</span>

<span class="ko-segment" data-segment-id="seg:paragraph:nspagelayout:0002:0001">종이 유형과 방향 같은 정보를 사용자로부터 묻는 패널입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:nspagelayout:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:nspagelayout:0004:0001">macOS ?+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
@MainActor
class NSPageLayout
```

#### <span class="ko-segment" data-segment-id="seg:heading:overview:0007:0001">Overview</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0008:0001">페이지 레이아웃 패널은 사용자가 Page Setup 메뉴 항목을 선택할 때 일반적으로 표시됩니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:overview:0008:0002"><a href="nspagelayout/pagelayout.md">@@TOKEN_0@@</a> 클래스 메서드로 인스턴스를 가져옵니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:overview:0008:0003">그런 다음 <a href="nspagelayout/beginsheet(with:modalfor:delegate:didend:contextinfo:">@@TOKEN_0@@</a>.md)로 시트처럼 실행하거나, <a href="nspagelayout/runmodal(">@@TOKEN_1@@</a>.md) 또는 <a href="nspagelayout/runmodal(with:">@@TOKEN_2@@</a>.md)로 모달로 실행할 수 있습니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0009:0001">디자인 가이드는 <a href="https://developer.apple.comhttps://developer.apple.com/design/human-interface-guidelines/macos/system-capabilities/printing#page-setup-dialogs">@@TOKEN_0@@</a>를 참조하십시오.</span>

## <span class="ko-segment" data-segment-id="seg:heading:topics:0010:0001">Topics</span>

### <span class="ko-segment" data-segment-id="seg:heading:running-the-page-setup-dialog:0011:0001">페이지 설정 대화 상자 실행</span>

- <span class="ko-segment" data-segment-id="seg:list:running-the-page-setup-dialog:0012:0001"><a href="nspagelayout/beginsheet(using:on:completionhandler:">func beginSheet(using: NSPrintInfo, on: NSWindow, completionHandler: ((NSPageLayout.Result) -&gt; Void)?)</a>.md)</span>
- <span class="ko-segment" data-segment-id="seg:list:running-the-page-setup-dialog:0012:0002"><a href="nspagelayout/beginsheet(with:modalfor:delegate:didend:contextinfo:">func beginSheet(with: NSPrintInfo, modalFor: NSWindow, delegate: Any?, didEnd: Selector?, contextInfo: UnsafeMutableRawPointer?)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:running-the-page-setup-dialog:0013:0001">지정된 인쇄 정보 객체에 대해 지정된 창과 관련된 문서 모달 방식으로 페이지 설정 시트를 표시합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:running-the-page-setup-dialog:0014:0001"><a href="nspagelayout/runmodal.md">func runModal() -&gt; Int</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:running-the-page-setup-dialog:0015:0001">공유 인쇄 정보 객체를 사용해 페이지 레이아웃 패널을 표시하고 모달 루프를 시작합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:running-the-page-setup-dialog:0016:0001"><a href="nspagelayout/runmodal(with:">func runModal(with: NSPrintInfo) -&gt; Int</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:running-the-page-setup-dialog:0017:0001">지정된 인쇄 정보 객체를 사용해 페이지 레이아웃 패널을 표시하고 모달 루프를 시작합니다.</span>

### <span class="ko-segment" data-segment-id="seg:heading:customizing-the-page-setup-dialog:0018:0001">페이지 설정 대화 상자 사용자 지정</span>

- <span class="ko-segment" data-segment-id="seg:list:customizing-the-page-setup-dialog:0019:0001"><a href="nspagelayout/addaccessorycontroller(_:">func addAccessoryController(NSViewController)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:customizing-the-page-setup-dialog:0020:0001">페이지 설정 패널에 표시할 액세서리 뷰의 지정된 컨트롤러를 추가합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:customizing-the-page-setup-dialog:0021:0001"><a href="nspagelayout/removeaccessorycontroller(_:">func removeAccessoryController(NSViewController)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:customizing-the-page-setup-dialog:0022:0001">지정된 액세서리 뷰의 컨트롤러를 제거합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:customizing-the-page-setup-dialog:0023:0001">[var accessoryControllers: [NSViewController]](nspagelayout/accessorycontrollers.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:customizing-the-page-setup-dialog:0024:0001">페이지 레이아웃 패널에 속하는 액세서리 뷰 컨트롤러의 배열입니다.</span>

### <span class="ko-segment" data-segment-id="seg:heading:accessing-the-printing-information:0025:0001">인쇄 정보 접근</span>

- <span class="ko-segment" data-segment-id="seg:list:accessing-the-printing-information:0026:0001"><a href="nspagelayout/printinfo.md">var printInfo: NSPrintInfo?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:accessing-the-printing-information:0027:0001">페이지 레이아웃 패널이 실행될 때 사용되는 인쇄 정보 객체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:accessing-the-printing-information:0028:0001"><a href="nsprintinfo.md">class NSPrintInfo</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:accessing-the-printing-information:0029:0001">인쇄 출력 생성을 위해 사용되는 정보를 저장하는 객체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:accessing-the-printing-information:0030:0001"><a href="nspagelayout/result.md">NSPageLayout.Result</a></span>

## <span class="ko-segment" data-segment-id="seg:heading:relationships:0031:0001">Relationships</span>

### <span class="ko-segment" data-segment-id="seg:heading:inherits-from:0032:0001">상속</span>

- <span class="ko-segment" data-segment-id="seg:list:inherits-from:0033:0001"><a href="../ObjectiveC/NSObject-swift.class.md">NSObject</a></span>

### <span class="ko-segment" data-segment-id="seg:heading:conforms-to:0034:0001">준수</span>

- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0035:0001"><a href="../Swift/CVarArg.md">CVarArg</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0035:0002"><a href="../Swift/CustomDebugStringConvertible.md">CustomDebugStringConvertible</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0035:0003"><a href="../Swift/CustomStringConvertible.md">CustomStringConvertible</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0035:0004"><a href="../Swift/Equatable.md">Equatable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0035:0005"><a href="../Swift/Hashable.md">Hashable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0035:0006"><a href="../ObjectiveC/NSObjectProtocol.md">NSObjectProtocol</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0035:0007"><a href="../Swift/Sendable.md">Sendable</a></span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0036:0001">참고</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0037:0001"><a href="nsprintpanel.md">class NSPrintPanel</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0038:0001">인쇄 작업에 대한 정보를 사용자에게 묻는 인쇄 패널입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0040:0001">*<a href="https://developer.apple.com/documentation/appkit/nspagelayout">View on Apple Developer</a>*</span>

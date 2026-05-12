---
source_path: "documentation/AppKit/nsapplicationdelegate/application-printfileswithsettingsshowprintpanels.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/appkit/nsapplicationdelegate/application-printfileswithsettingsshowprintpanels"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:applicationprintfileswithsettingsshowprintpanels:0000:0001">application(_:printFiles:withSettings:showPrintPanels:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:applicationprintfileswithsettingsshowprintpanels:0001:0001">**Framework**: AppKit **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:applicationprintfileswithsettingsshowprintpanels:0002:0001">지정된 파일을 앱이 인쇄하는지 여부를 나타내는 값을 반환합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:applicationprintfileswithsettingsshowprintpanels:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:applicationprintfileswithsettingsshowprintpanels:0004:0001">macOS ?+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
@MainActor
optional func application(_ application: NSApplication, printFiles fileNames: [String], withSettings printSettings: [NSPrintInfo.AttributeKey : Any], showPrintPanels: Bool) -> NSApplication.PrintReply
```

#### <span class="ko-segment" data-segment-id="seg:heading:return-value:0007:0001">반환 값</span>

<span class="ko-segment" data-segment-id="seg:paragraph:return-value:0008:0001">인쇄가 성공했는지 여부를 나타내는 상수입니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:return-value:0008:0002">가능한 값 목록은 <a href="nsapplication/printreply.md">@@TOKEN_0@@</a>를 참조합니다.</span>

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0009:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0001">예를 들어 인쇄로 인해 시트가 표시될 수 있는 경우처럼 인쇄 결과를 즉시 반환할 수 없으면 <code>NSPrintingReplyLater</code>를 반환합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0002">메서드가 <code>NSPrintingReplyLater</code>를 반환하면 전체 인쇄 작업이 성공했든 실패했든 완료 시점에 <code>NSApplication</code>의 <a href="nsapplication/reply(toopenorprint:">@@TOKEN_2@@</a>.md)] 메서드를 항상 호출해야 합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0011:0001">이 대리자 메서드는 더 이상 사용되지 않는 <code>application:printFiles:</code>를 대체합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0011:0002">애플리케이션 대리자가 사용되지 않는 메서드만 구현한 경우에도 해당 메서드는 호출되며, <code>NSApplication</code>은 비공개 기능을 사용해 인쇄 설정이 적용되도록 처리합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0012:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0013:0001"><code>application</code>: 인쇄를 처리하는 application 객체입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0013:0002"><code>fileNames</code>: 인쇄할 파일 이름을 각 항목으로 포함하는 <a href="https://developer.apple.com/documentation/Foundation/NSString">@@TOKEN_1@@</a> 객체의 배열입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0013:0003"><code>printSettings</code>: <code>NSPrintInfo</code>와 호환되는 인쇄 작업 속성을 포함하는 사전입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0013:0004"><code>showPrintPanels</code>: 각 파일을 인쇄할 때 인쇄 패널을 표시할지 여부를 지정하는 Boolean 값입니다. 이 값이 <a href="https://developer.apple.com/documentation/Swift/false">@@TOKEN_1@@</a>인 경우에도 인쇄 진행 표시기는 표시됩니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0014:0001">참고</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0015:0001"><a href="nsapplicationdelegate/application(_:printfile:">func application(NSApplication, printFile: String) -&gt; Bool</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0016:0001">지정된 파일을 앱이 완전히 인쇄했는지 여부를 나타내는 Boolean 값을 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0017:0001"><a href="nsapplication/printreply.md">NSApplication.PrintReply</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0018:0001">인쇄 요청의 결과를 나타내는 상수입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0020:0001">*<a href="https://developer.apple.com/documentation/appkit/nsapplicationdelegate/application(_:printfiles:withsettings:showprintpanels:">Apple Developer에서 보기</a>)*</span>

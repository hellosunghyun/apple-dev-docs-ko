---
source_path: "documentation/AppKit/nsaccessibilityprotocol/isaccessibilityminimized.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/appkit/nsaccessibilityprotocol/isaccessibilityminimized"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:isaccessibilityminimized:0000:0001">isAccessibilityMinimized()</span>

<span class="ko-segment" data-segment-id="seg:paragraph:isaccessibilityminimized:0001:0001">**프레임워크**: AppKit **종류**: method **필수**: 예</span>

<span class="ko-segment" data-segment-id="seg:paragraph:isaccessibilityminimized:0002:0001">창이 최소화된 상태인지 여부를 결정하는 Boolean 값을 반환합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:isaccessibilityminimized:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:isaccessibilityminimized:0004:0001">macOS 10.10+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
func isAccessibilityMinimized() -> Bool
```

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0007:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0008:0001"><a href="nsaccessibilityprotocol/accessibilityactivationpoint.md">func accessibilityActivationPoint() -&gt; NSPoint</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0009:0001">사용자 인터페이스 요소의 활성화 지점을 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="nsaccessibilityprotocol/setaccessibilityactivationpoint(_:">func accessibilityActivationPoint() -&gt; NSPoint</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">사용자 인터페이스 요소의 활성화 지점을 설정합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="nsaccessibilityprotocol/isaccessibilityalternateuivisible.md">func isAccessibilityAlternateUIVisible() -&gt; Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">접근성 요소의 대체 UI가 현재 표시되는지 여부를 결정하는 Boolean 값을 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="nsaccessibilityprotocol/setaccessibilityalternateuivisible(_:">func setAccessibilityAlternateUIVisible(Bool)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">접근성 요소의 대체 UI가 현재 표시되는지 여부를 결정하는 Boolean 값을 설정합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="nsaccessibilityprotocol/accessibilitycancelbutton.md">func accessibilityCancelButton() -&gt; Any?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">창의 취소 버튼을 나타내는 하위 접근성 요소를 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="nsaccessibilityprotocol/setaccessibilitycancelbutton(_:">func setAccessibilityCancelButton(Any?)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">창의 취소 버튼을 나타내는 하위 접근성 요소를 설정합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="nsaccessibilityprotocol/accessibilityclosebutton.md">func accessibilityCloseButton() -&gt; Any?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">창의 닫기 버튼을 나타내는 하위 접근성 요소를 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001"><a href="nsaccessibilityprotocol/setaccessibilityclosebutton(_:">func setAccessibilityCloseButton(Any?)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">창의 닫기 버튼을 나타내는 하위 접근성 요소를 설정합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0024:0001"><a href="nsaccessibilityprotocol/accessibilitydefaultbutton.md">func accessibilityDefaultButton() -&gt; Any?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">창의 기본 버튼을 나타내는 하위 접근성 요소를 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0026:0001"><a href="nsaccessibilityprotocol/setaccessibilitydefaultbutton(_:">func setAccessibilityDefaultButton(Any?)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0027:0001">창의 기본 버튼을 나타내는 하위 접근성 요소를 설정합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0028:0001"><a href="nsaccessibilityprotocol/accessibilityfullscreenbutton.md">func accessibilityFullScreenButton() -&gt; Any?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0029:0001">창의 전체 화면 버튼을 나타내는 하위 접근성 요소를 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0030:0001"><a href="nsaccessibilityprotocol/setaccessibilityfullscreenbutton(_:">func setAccessibilityFullScreenButton(Any?)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0031:0001">창의 전체 화면 버튼을 나타내는 하위 접근성 요소를 설정합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0032:0001"><a href="nsaccessibilityprotocol/accessibilitygrowarea.md">func accessibilityGrowArea() -&gt; Any?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0033:0001">창의 크기 조절 영역을 나타내는 하위 접근성 요소를 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0034:0001"><a href="nsaccessibilityprotocol/setaccessibilitygrowarea(_:">func setAccessibilityGrowArea(Any?)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0035:0001">창의 크기 조절 영역을 나타내는 하위 접근성 요소를 설정합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0036:0001"><a href="nsaccessibilityprotocol/isaccessibilitymain.md">func isAccessibilityMain() -&gt; Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0037:0001">창이 앱의 메인 창인지 여부를 결정하는 Boolean 값을 반환합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0039:0001">*<a href="https://developer.apple.com/documentation/appkit/nsaccessibilityprotocol/isaccessibilityminimized(">Apple Developer에서 보기</a>)*</span>

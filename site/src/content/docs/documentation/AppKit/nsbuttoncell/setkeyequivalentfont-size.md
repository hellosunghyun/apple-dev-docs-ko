---
source_path: "documentation/AppKit/nsbuttoncell/setkeyequivalentfont-size.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/appkit/nsbuttoncell/setkeyequivalentfont-size"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:setkeyequivalentfontsize:0000:0001">setKeyEquivalentFont(_:size:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:setkeyequivalentfontsize:0001:0001">**Framework**: AppKit **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:setkeyequivalentfontsize:0002:0001">키 equivalent를 그리는 데 사용되는 글꼴의 이름과 크기를 설정합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:setkeyequivalentfontsize:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:setkeyequivalentfontsize:0004:0001">macOS 10.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
func setKeyEquivalentFont(_ fontName: String, size fontSize: CGFloat)
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">이 메서드는 필요한 경우 버튼을 다시 표시합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">버튼에 키 equivalent가 연결되어 있지 않으면 이 메서드는 아무 작업도 수행하지 않습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0003">기본 글꼴은 제목을 그리는 데 사용되는 글꼴과 동일합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0009:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0010:0001"><code>fontName</code>: 키 equivalent를 그리는 데 사용할 글꼴의 이름입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0010:0002"><code>fontSize</code>: 키 equivalent를 그리는 데 사용할 글꼴 크기입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0011:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="nscell/font.md">var font: NSFont?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">셀에서 텍스트를 표시하는 데 사용하는 글꼴입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="nsbuttoncell/keyequivalent.md">var keyEquivalent: String</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">버튼의 key-equivalent 문자입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="nsbuttoncell/keyequivalentfont.md">var keyEquivalentFont: NSFont?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">버튼의 key-equivalent를 그리는 데 사용되는 글꼴입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="nsbuttoncell/keyequivalentmodifiermask.md">var keyEquivalentModifierMask: NSEvent.ModifierFlags</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">버튼의 key-equivalent와 관련된 modifier 키를 식별하는 마스크입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">*<a href="https://developer.apple.com/documentation/appkit/nsbuttoncell/setkeyequivalentfont(_:size:">View on Apple Developer</a>)*</span>

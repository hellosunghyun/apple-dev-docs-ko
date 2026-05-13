---
source_path: "documentation/AVFoundation/avmediaselectionoption/extendedlanguagetag.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avmediaselectionoption/extendedlanguagetag"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:extendedlanguagetag:0000:0001">extendedLanguageTag</span>

<span class="ko-segment" data-segment-id="seg:paragraph:extendedlanguagetag:0001:0001">**Framework**: AVFoundation **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:extendedlanguagetag:0002:0001">옵션과 연관된 IETF BCP 47 언어 태그입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:extendedlanguagetag:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:extendedlanguagetag:0004:0001">iOS 7.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:extendedlanguagetag:0004:0002">iPadOS 7.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:extendedlanguagetag:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:extendedlanguagetag:0004:0004">macOS 10.9+</span>
- <span class="ko-segment" data-segment-id="seg:list:extendedlanguagetag:0004:0005">tvOS 9.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:extendedlanguagetag:0004:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:extendedlanguagetag:0004:0007">watchOS 1.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var extendedLanguageTag: String? { get }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">이 속성은 <code>nil</code>일 수 있으며, 이는 옵션이 선택될 때 표시되는 기본 미디어가 언어 정보를 포함하지 않음을 의미합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">이는 HTTP Live Streaming 재생 목록처럼 언어 정보가 선택적이거나, 기계 판독 가능한 형태로 언어 정보를 수용하지 않는 미디어 형식에서 발생할 수 있습니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0001">언어 기준으로 미디어 선택 옵션을 필터링하는 클라이언트는 이 값이 <code>nil</code>인 경우를 처리할 수 있어야 합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0002">또한 <code>extendedLanguageTag</code>가 존재하지만 언어가 “undetermined”(<code>ISO 639-2</code>의 <code>und</code> 값)인 경우에도 처리할 수 있어야 합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0010:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0011:0001"><a href="avmediaselectionoption/displayname.md">var displayName: String</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0012:0001">현재 시스템 로케일을 사용해 표시할 수 있는 문자열입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0013:0001"><a href="avmediaselectionoption/displayname(with:">func displayName(with: Locale) -&gt; String</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0014:0001">지정한 로케일을 사용해 표시할 수 있는 문자열을 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0015:0001"><a href="avmediaselectionoption/locale.md">var locale: Locale?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0016:0001">미디어 옵션이 작성된 로케일입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0018:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avmediaselectionoption/extendedlanguagetag">View on Apple Developer</a>*</span>

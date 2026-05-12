---
source_path: "documentation/AppKit/nsopenpanel/resolvesaliases.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/appkit/nsopenpanel/resolvesaliases"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:resolvesaliases:0000:0001">resolvesAliases</span>

<span class="ko-segment" data-segment-id="seg:paragraph:resolvesaliases:0001:0001">**Framework**: AppKit **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:resolvesaliases:0002:0001">패널에서 별칭을 해석하는지 나타내는 부울 값입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:resolvesaliases:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:resolvesaliases:0004:0001">macOS ?+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var resolvesAliases: Bool { get set }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">이 속성의 값이 <a href="https://developer.apple.com/documentation/Swift/true">@@TOKEN_0@@</a>이면 패널에 별칭을 드롭하거나 파일 이름 또는 URL을 요청할 때 해석된 별칭이 반환됩니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">이 속성의 기본값은 <a href="https://developer.apple.com/documentation/Swift/true">@@TOKEN_0@@</a>입니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0003">이 값이 <a href="https://developer.apple.com/documentation/Swift/false">@@TOKEN_0@@</a>일 때는 별칭을 선택하면 별칭이 가리키는 파일이나 디렉터리 대신 별칭 자체가 반환됩니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">참고</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="nsopenpanel/canchoosefiles.md">var canChooseFiles: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">패널에서 사용자가 파일을 선택할 수 있는지 나타내는 부울 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="nsopenpanel/canchoosedirectories.md">var canChooseDirectories: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">패널에서 사용자가 디렉터리를 선택할 수 있는지 나타내는 부울 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="nsopenpanel/allowsmultipleselection.md">var allowsMultipleSelection: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">사용자가 여러 파일 및 디렉터리를 선택할 수 있는지 나타내는 부울 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="nsopenpanel/isaccessoryviewdisclosed.md">var isAccessoryViewDisclosed: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">패널의 액세서리 뷰가 표시되는지 여부를 나타내는 부울 값입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">*<a href="https://developer.apple.com/documentation/appkit/nsopenpanel/resolvesaliases">View on Apple Developer</a>*</span>

---
source_path: "documentation/ARKit/arreferenceimage/name.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/arkit/arreferenceimage/name"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:name:0000:0001">name</span>

<span class="ko-segment" data-segment-id="seg:paragraph:name:0001:0001">**Framework**: ARKit **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:name:0002:0001">이미지에 대한 설명 이름입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:name:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:name:0004:0001">iOS 11.3+</span>
- <span class="ko-segment" data-segment-id="seg:list:name:0004:0002">iPadOS 11.3+</span>
- <span class="ko-segment" data-segment-id="seg:list:name:0004:0003">Mac Catalyst 13.1+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var name: String? { get set }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">A tracked raycast updates continuously until you stop it explicitly by calling <a href="artrackedraycast/stoptracking(">@@TOKEN_0@@</a>.md).</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">프로그램 방식으로 생성한 참조 이미지의 경우, 이 값은 <code>nil</code>입니다.</span>

> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0009:0001">**참고**: 이 문자열은 사용자 표시용으로 지역화된 텍스트가 아닙니다.</span> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0009:0002">그러나 디버깅 시에는 이 속성을 사용해 어떤 이미지가 감지되었는지 나타낼 수 있습니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0010:0001">참고</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0011:0001"><a href="arreferenceimage/physicalsize.md">var physicalSize: CGSize</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0012:0001">이미지의 실제 크기(미터 단위)입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0013:0001"><a href="arreferenceimage/resourcegroupname.md">var resourceGroupName: String?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0014:0001">이 이미지의 AR 리소스 그룹 이름입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0016:0001">*<a href="https://developer.apple.com/documentation/arkit/arreferenceimage/name">View on Apple Developer</a>*</span>

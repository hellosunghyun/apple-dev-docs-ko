---
source_path: "documentation/ARKit/arreferenceobject/name.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/arkit/arreferenceobject/name"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:name:0000:0001">name</span>

<span class="ko-segment" data-segment-id="seg:paragraph:name:0001:0001">**Framework**: ARKit **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:name:0002:0001">참조 객체에 대한 설명 이름입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:name:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:name:0004:0001">iOS 12.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:name:0004:0002">iPadOS 12.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:name:0004:0003">Mac Catalyst 13.1+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var name: String? { get set }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">Xcode 에셋 카탈로그에서 로드한 참조 객체의 경우, 이 속성은 에셋 카탈로그에 지정된 이름입니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002"><code>extractReferenceObject</code>를 사용해 AR 세션에서 기록한 객체에 이름을 할당할 때도 이 속성을 사용할 수 있습니다.</span>

> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0009:0001">**Note**: 이 문자열은 사용자 표시를 위한 로컬라이즈 텍스트가 아닙니다.</span> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0009:0002">그러나 디버깅에서는 이 속성을 사용해 어떤 참조 객체가 감지되었는지 표시할 수 있습니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0010:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0011:0001"><a href="arreferenceobject/resourcegroupname.md">var resourceGroupName: String?</a></span>
- <span class="ko-segment" data-segment-id="seg:list:see-also:0011:0002"><a href="arreferenceobject/center.md">var center: simd_float3</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0012:0001">참조 객체의 공간 매핑 데이터의 중심점입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0013:0001"><a href="arreferenceobject/extent.md">var extent: simd_float3</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0014:0001">참조 객체의 공간 매핑 데이터의 크기입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0015:0001"><a href="arreferenceobject/scale.md">var scale: simd_float3</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0016:0001">참조 객체가 정의하는 로컬 좌표 공간의 스케일 계수입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0018:0001">*<a href="https://developer.apple.com/documentation/arkit/arreferenceobject/name">View on Apple Developer</a>*</span>

---
source_path: "documentation/AVFoundation/avcapturedepthdataoutput/alwaysdiscardslatedepthdata.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avcapturedepthdataoutput/alwaysdiscardslatedepthdata"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:alwaysdiscardslatedepthdata:0000:0001">alwaysDiscardsLateDepthData</span>

<span class="ko-segment" data-segment-id="seg:paragraph:alwaysdiscardslatedepthdata:0001:0001">**Framework**: AVFoundation **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:alwaysdiscardslatedepthdata:0002:0001">다음 깊이 데이터가 캡처되기 전에 처리되지 않은 깊이 데이터를 캡처 출력이 폐기해야 하는지 여부를 결정하는 Boolean 값입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:alwaysdiscardslatedepthdata:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:alwaysdiscardslatedepthdata:0004:0001">iOS 11.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:alwaysdiscardslatedepthdata:0004:0002">iPadOS 11.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:alwaysdiscardslatedepthdata:0004:0003">Mac Catalyst 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:alwaysdiscardslatedepthdata:0004:0004">tvOS 17.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var alwaysDiscardsLateDepthData: Bool { get set }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">새 깊이 데이터가 캡처될 때 <a href="avcapturedepthdataoutput/delegatecallbackqueue.md">@@TOKEN_0@@</a> 디스패치 큐가 블록되면, 이 속성은 캡처 출력이 이전 깊이 데이터를 처리할 대리자 객체에 더 많은 시간을 허용할지 결정합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">이 속성 값이 <a href="https://developer.apple.com/documentation/Swift/false">@@TOKEN_0@@</a>인 경우, 캡처 출력은 가능한 한 빨리 이전 데이터를 대리자에게 전달하지만 그 결과로 애플리케이션 메모리 사용량이 증가할 수 있습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0003">기본값은 <a href="https://developer.apple.com/documentation/Swift/true">@@TOKEN_0@@</a>입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">참고</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="avcapturedepthdataoutput/isfilteringenabled.md">var isFilteringEnabled: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">깊이 데이터 출력에서 노이즈를 평활화하고 유효하지 않은 값을 채우기 위해 깊이 데이터를 필터링해야 하는지 여부를 결정하는 Boolean 값입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avcapturedepthdataoutput/alwaysdiscardslatedepthdata">View on Apple Developer</a>*</span>

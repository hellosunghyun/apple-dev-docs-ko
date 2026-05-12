---
source_path: "documentation/ARKit/worldtrackingprovider/anchorupdates.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/arkit/worldtrackingprovider/anchorupdates"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:anchorupdates:0000:0001">anchorUpdates</span>

<span class="ko-segment" data-segment-id="seg:paragraph:anchorupdates:0001:0001">**Framework**: ARKit **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:anchorupdates:0002:0001">공급자가 추적하는 앵커 업데이트의 시퀀스입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:anchorupdates:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:anchorupdates:0004:0001">visionOS 1.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
final var anchorUpdates: AnchorUpdateSequence<WorldAnchor> { get }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">모든 앵커 업데이트를 제공하는 비동기 시퀀스입니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">공급자는 앵커 업데이트가 사용 가능해지면 시퀀스를 통해 새로 생성되거나 갱신된 월드 앵커를 제공합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0001">반응할 앵커는 <a href="anchor/id.md">@@TOKEN_0@@</a>를 호출하여 지정합니다.</span>

> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0010:0001">**참고**: 공급자는 앱의 이전 실행에서 영구 저장된 월드 앵커에 대한 업데이트도 월드 추적 공급자가 실행되는 즉시 시퀀스로 제공합니다.</span> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0010:0002">월드 앵커는 사용자가 명시적으로 제거할 때까지 기기 재시작 시에도 유지됩니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0011:0001">참고</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="worldtrackingprovider/init.md">init()</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">월드 추적 공급자를 생성합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001">[static var requiredAuthorizations: [ARKitSession.AuthorizationType]](avaudiosequencer/infodictionarykey/composer.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">월드 앵커 추적에 필요한 권한 부여 유형입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="avaudiosequencer/infodictionarykey/copyright.md">static var isSupported: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">현재 런타임 환경에서 월드 추적 공급자를 지원하는지 나타내는 부울 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001">[var allAnchors: [WorldAnchor]?](avaudiosequencer/infodictionarykey/genre.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">월드 추적 공급자가 알고 있는 모든 월드 앵커의 배열입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="avaudiosequencer/infodictionarykey/lyricist.md">func addAnchor(WorldAnchor) async throws</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">제공한 월드 앵커를 현재 추적 중인 앵커 집합에 추가합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001"><a href="worldtrackingprovider/error.md">WorldTrackingProvider.Error</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">월드 추적 세션에서 발생할 수 있는 오류입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">*<a href="https://developer.apple.com/documentation/arkit/worldtrackingprovider/anchorupdates">View on Apple Developer</a>*</span>

---
source_path: "documentation/AVFoundation/avurlassetprimarysessionidentifierkey.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avurlassetprimarysessionidentifierkey"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:avurlassetprimarysessionidentifierkey:0000:0001">AVURLAssetPrimarySessionIdentifierKey</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avurlassetprimarysessionidentifierkey:0001:0001">**Framework**: AVFoundation **Kind**: var</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avurlassetprimarysessionidentifierkey:0002:0001">자산이 수행하는 HTTP 요청에 대한 세션 식별자로 설정할 UUID를 지정합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avurlassetprimarysessionidentifierkey:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:avurlassetprimarysessionidentifierkey:0004:0001">iOS 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avurlassetprimarysessionidentifierkey:0004:0002">iPadOS 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avurlassetprimarysessionidentifierkey:0004:0003">Mac Catalyst 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avurlassetprimarysessionidentifierkey:0004:0004">macOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avurlassetprimarysessionidentifierkey:0004:0005">tvOS 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avurlassetprimarysessionidentifierkey:0004:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avurlassetprimarysessionidentifierkey:0004:0007">watchOS 9.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
let AVURLAssetPrimarySessionIdentifierKey: String
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">자산은 <code>_HLS_primary_id</code> 쿼리 매개변수의 값으로 지정된 값을 추가합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">이 옵션은 HTTP Live Streaming 자산에서만 지원됩니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="avurlassetallowscellularaccesskey.md">let AVURLAssetAllowsCellularAccessKey: String</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">자산을 대신해 셀룰러 네트워크에서 시스템이 네트워크 요청을 수행할 수 있는지 나타내는 부울 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="avurlassetallowsconstrainednetworkaccesskey.md">let AVURLAssetAllowsConstrainedNetworkAccessKey: String</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">이 자산을 대신해 시스템이 제한된 인터페이스를 사용하는 네트워크 요청을 허용하는지 나타내는 부울 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="avurlassetallowsexpensivenetworkaccesskey.md">let AVURLAssetAllowsExpensiveNetworkAccessKey: String</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">이 자산을 대신해 시스템이 과금이 많이 발생하는 인터페이스를 사용하는 네트워크 요청을 허용하는지 나타내는 부울 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="avurlassethttpcookieskey.md">let AVURLAssetHTTPCookiesKey: String</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">URL 자산이 HTTP 요청과 함께 전송할 수 있는 HTTP 쿠키입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="avurlassethttpuseragentkey.md">let AVURLAssetHTTPUserAgentKey: String</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">자산이 만드는 요청의 사용자 에이전트를 지정하는 키입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="avurlassetoverridemimetypekey.md">let AVURLAssetOverrideMIMETypeKey: String</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">미디어 리소스의 형식을 식별할 때 사용할 MIME 유형을 지정하는 키입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001"><a href="avurlassetpreferprecisedurationandtimingkey.md">let AVURLAssetPreferPreciseDurationAndTimingKey: String</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">자산에서 정확한 재생 길이와 시간 기반 정밀 임의 접근을 제공해야 하는지 나타내는 부울 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0024:0001"><a href="avurlassetreferencerestrictionskey.md">let AVURLAssetReferenceRestrictionsKey: String</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">자산이 외부 미디어 데이터에 대한 참조를 해석할 때 사용되는 제약 조건을 나타내는 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0026:0001"><a href="avurlassetshouldsupportaliasdatareferenceskey.md">let AVURLAssetShouldSupportAliasDataReferencesKey: String</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0027:0001">자산 내에서 시스템이 별칭 데이터 참조를 파싱하고 해석하는지 나타내는 부울 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0028:0001"><a href="avurlasseturlrequestattributionkey.md">let AVURLAssetURLRequestAttributionKey: String</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0029:0001">이 자산이 요청하는 URL의 출처를 지정하는 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0030:0001"><a href="avurlassetshouldparseexternalsphericaltagskey.md">let AVURLAssetShouldParseExternalSphericalTagsKey: String</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0031:0001">자산 내 추가 projected media 신호를 형식 설명 확장으로 파싱하고 해석해야 하는지 나타냅니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0033:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avurlassetprimarysessionidentifierkey">View on Apple Developer</a>*</span>

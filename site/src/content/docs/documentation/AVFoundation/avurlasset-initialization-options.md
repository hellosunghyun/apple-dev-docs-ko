---
source_path: "documentation/AVFoundation/avurlasset-initialization-options.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avurlasset-initialization-options"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:initialization-options:0000:0001">초기화 옵션</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initialization-options:0001:0001">**Framework**: AVFoundation</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initialization-options:0002:0001">미디어 에셋의 초기화를 구성할 옵션을 지정합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:topics:0003:0001">Topics</span>

### <span class="ko-segment" data-segment-id="seg:heading:options:0004:0001">Options</span>

- <span class="ko-segment" data-segment-id="seg:list:options:0005:0001"><a href="avurlassetallowscellularaccesskey.md">let AVURLAssetAllowsCellularAccessKey: String</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:options:0006:0001">시스템이 셀룰러 네트워크에 연결되어 있을 때 이 에셋을 대신해 네트워크 요청을 수행할 수 있는지를 나타내는 Boolean 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:options:0007:0001"><a href="avurlassetallowsconstrainednetworkaccesskey.md">let AVURLAssetAllowsConstrainedNetworkAccessKey: String</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:options:0008:0001">시스템이 이 에셋을 대신한 네트워크 요청이 제한된 인터페이스를 사용하도록 허용하는지 나타내는 Boolean 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:options:0009:0001"><a href="avurlassetallowsexpensivenetworkaccesskey.md">let AVURLAssetAllowsExpensiveNetworkAccessKey: String</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:options:0010:0001">시스템이 이 에셋을 대신한 네트워크 요청이 비용이 높은 인터페이스를 사용하도록 허용하는지 나타내는 Boolean 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:options:0011:0001"><a href="avurlassethttpcookieskey.md">let AVURLAssetHTTPCookiesKey: String</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:options:0012:0001">URL 에셋이 HTTP 요청과 함께 전송할 수 있는 HTTP 쿠키입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:options:0013:0001"><a href="avurlassethttpuseragentkey.md">let AVURLAssetHTTPUserAgentKey: String</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:options:0014:0001">에셋이 수행하는 요청의 사용자 에이전트를 지정하는 키입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:options:0015:0001"><a href="avurlassetoverridemimetypekey.md">let AVURLAssetOverrideMIMETypeKey: String</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:options:0016:0001">미디어 리소스의 형식을 식별하기 위해 사용할 MIME 유형을 지정하는 키입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:options:0017:0001"><a href="avurlassetpreferprecisedurationandtimingkey.md">let AVURLAssetPreferPreciseDurationAndTimingKey: String</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:options:0018:0001">에셋이 정확한 재생 시간과 시간 기반 정밀 임의 접근을 제공해야 하는지 나타내는 Boolean 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:options:0019:0001"><a href="avurlassetprimarysessionidentifierkey.md">let AVURLAssetPrimarySessionIdentifierKey: String</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:options:0020:0001">에셋이 수행하는 HTTP 요청의 세션 식별자로 사용할 UUID를 지정합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:options:0021:0001"><a href="avurlassetreferencerestrictionskey.md">let AVURLAssetReferenceRestrictionsKey: String</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:options:0022:0001">에셋이 외부 미디어 데이터 참조를 해결할 때 사용하는 제한 조건을 나타내는 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:options:0023:0001"><a href="avurlassetshouldsupportaliasdatareferenceskey.md">let AVURLAssetShouldSupportAliasDataReferencesKey: String</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:options:0024:0001">시스템이 에셋의 alias data references를 파싱하고 해결하는지 여부를 나타내는 Boolean 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:options:0025:0001"><a href="avurlasseturlrequestattributionkey.md">let AVURLAssetURLRequestAttributionKey: String</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:options:0026:0001">이 에셋이 요청하는 URL의 어트리뷰션을 지정하는 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:options:0027:0001"><a href="avurlassetshouldparseexternalsphericaltagskey.md">let AVURLAssetShouldParseExternalSphericalTagsKey: String</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:options:0028:0001">에셋의 추가 projected media signaling을 형식 설명 확장으로 파싱하고 해결해야 하는지 나타냅니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0029:0001">참조 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0030:0001"><a href="avurlasset/init(url:">convenience init(url: URL)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0031:0001">지정된 URL의 미디어를 모델링하는 에셋을 생성합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0032:0001">[init(url: URL, options: [String : Any]?)](avurlasset/init(url:options:)-2x8uu.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0033:0001">지정된 URL의 미디어 리소스를 모델링하는 에셋을 생성합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0035:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avurlasset-initialization-options">View on Apple Developer</a>*</span>
